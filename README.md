# Project Template

My project template using Codex: a reusable, role-based team for taking software projects from idea to incremental, evidence-based release.

## Team roles

| Role | Use it for | Main output |
| --- | --- | --- |
| Business Analyst | Discovering needs and defining scope | Requirements brief and acceptance criteria |
| Project Manager | Sequencing work and managing risk | Delivery plan and backlog |
| Solution Architect | Designing system boundaries and technical decisions | Architecture and interface plan |
| Frontend Developer | User interface and browser behavior | Accessible UI implementation |
| Backend Developer | APIs, data, services, integrations | Secure backend implementation |
| Tester | Test design, validation, defect reporting | Test results and release recommendation |
| Security Engineer | Threat modeling and security review | Findings and remediation plan |
| DevOps | Environments, CI/CD, releases, observability | Release and rollback plan |

## How to use

1. Open this folder in Codex. Start a new chat after pulling changes so the project agents and skills are available.
2. Start with a stage command, usually `init brainstorm`. The Brainstorm stage asks whether the Product Owner wants to paste an idea, upload material, share an existing brief, or start from scratch.
3. Follow the stages in order. Each stage creates or updates the right project artifact under `projects/<project-name>/`.
4. Codex keeps a save point in `07-session-timeline.md` after meaningful work, so a new chat can continue from the last outcome. It records completed work-session duration and the break before you return; it does not count time while you are away as active work.
5. Say `exit` when a stage is complete. Codex records the outcome, open questions, recommended next stage, and final session checkpoint.
6. Collaborators should review `AGENTS.md` before working. It contains the operating rules, including the rule that humans own all Git commits and pushes.

You do not need to remember a resume command. In projects created from this template, a new chat checks `TODO.md`, then restores the one active project from its `00-project-state.md` and `07-session-timeline.md`. While maintaining this template repository, Codex skips the intentionally empty to-do list. If more than one project is active, Codex asks which one to use.

## Working rhythm

Use the documents as a lightweight Agile loop rather than a one-time handoff: refine the backlog, select a small sprint goal, build vertically, verify with evidence, review the increment, and update risks and follow-up work. Keep story IDs stable across all documents so requirements, implementation, tests, defects, and releases remain traceable.

The role prompts are project-scoped in `.codex/agents/`, so Codex can use them whenever this folder is opened. Restart or start a new task after adding these files if the role list is not visible yet.

## Example request

> We need a customer portal where users can view invoices and pay outstanding balances. Have `business_analyst` create the brief, then have `project_manager` make a delivery plan. Do not build yet.

See `AGENTS.md` for quality gates and handoff rules and `templates/` for project documents.

## Reusable skills

The role workflows are stored in `.agents/skills/`. They are project-scoped and can be invoked explicitly (for example, `$solution-architecture`) or selected automatically when a request matches the skill description.

Validate the skill library with `npm run validate:skills`. The validator uses Node.js only and needs no installed packages.

## Stages

Stages keep a chat focused and decide which roles and skills are relevant. The active stage stays in effect for follow-up messages until you say `exit`. If you request another stage or work that belongs elsewhere, Codex asks before switching instead of silently changing direction.

Lifecycle: `Discover -> Plan -> Design -> Build -> Verify -> Release -> Improve`.

## Available commands

These are natural-language commands for chat, not terminal commands.

| Command | What it does |
| --- | --- |
| `init brainstorm` | Starts discovery: explore an idea, supplied material, users, value, scope, and open questions. |
| `init planning` | Turns an approved brief into prioritized, ready-to-build stories and a delivery plan. |
| `init architecture` | Defines technical design, contracts, tool choices, security, and implementation order. |
| `init development` | Builds selected ready stories in small frontend and/or backend increments. |
| `init verification` | Tests acceptance criteria, reports defects, and assesses material security risks. |
| `init release` | Prepares release readiness, monitoring, communications, and rollback steps. It does not deploy by itself. |
| `init improve` | Runs a retrospective and turns learning into prioritized follow-up work. |
| `exit` | Closes the current stage and records its outcome, unresolved items, and recommended next stage. |
| `review TODO` | Reviews the shared cross-project task list and helps prioritize it. |

### Direct role requests

You can also ask a specific role directly when a full stage is unnecessary:

| Example request | Best for |
| --- | --- |
| `Business analyst: clarify these requirements...` | A focused requirements question |
| `Project manager: plan this approved story...` | Backlog, dependencies, or delivery sequencing |
| `Solution architect: compare these tools...` | Technical decisions and trade-offs |
| `Frontend developer: implement this ready UI story...` | Frontend implementation |
| `Backend developer: implement this ready API story...` | Backend implementation |
| `Tester: verify these acceptance criteria...` | Test planning and validation |
| `Security engineer: assess this change...` | Threat modeling and security review |
| `DevOps: prepare a release plan...` | Delivery, observability, and rollback planning |

### Optional direct skills

Stages and roles are the normal entry points. For a narrow workflow, you can explicitly invoke a skill with `$<skill-name>`:

`$product-discovery`, `$delivery-planning`, `$solution-architecture`, `$frontend-implementation`, `$backend-implementation`, `$test-verification`, `$security-assessment`, `$release-readiness`, `$project-traceability`, `$project-state`, `$session-continuity`, and `$todo-triage`.

## Shared to-do list

Use [TODO.md](TODO.md) for cross-project, blocked, urgent, or explicitly tracked tasks. At the beginning of a new chat, Codex reviews it before project state and flags only higher-priority work that materially affects the current request.
