import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const skillsRoot = join(process.cwd(), ".agents", "skills");
const entries = await readdir(skillsRoot, { withFileTypes: true });
const skillDirectories = entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name).sort();
const names = new Set();
const failures = [];

for (const directory of skillDirectories) {
  const file = join(skillsRoot, directory, "SKILL.md");
  let content;

  try {
    content = await readFile(file, "utf8");
  } catch {
    failures.push(`${directory}: missing SKILL.md`);
    continue;
  }

  const frontmatter = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!frontmatter) {
    failures.push(`${directory}: missing YAML frontmatter`);
    continue;
  }

  const name = frontmatter[1].match(/^name:\s*([a-z0-9-]+)\s*$/m)?.[1];
  const description = frontmatter[1].match(/^description:\s*(.+)\s*$/m)?.[1]?.trim();

  if (!name) failures.push(`${directory}: missing a valid name`);
  if (!description) failures.push(`${directory}: missing description`);
  if (name && name !== directory) failures.push(`${directory}: name must match its folder (${name})`);
  if (name && names.has(name)) failures.push(`${directory}: duplicate skill name (${name})`);
  if (name) names.add(name);
  if (!/^#\s+.+/m.test(content.slice(frontmatter[0].length))) failures.push(`${directory}: missing a Markdown title`);
  if (/(?:^|\n)\s*(?:TODO|TBD|FIXME|REPLACE_ME)\s*(?::|-|$)/im.test(content)) failures.push(`${directory}: contains an unfinished placeholder`);
}

if (skillDirectories.length === 0) failures.push("No skill directories found in .agents/skills.");

if (failures.length > 0) {
  console.error("Skill validation failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(`Skill validation passed: ${skillDirectories.length} skills checked.`);
}
