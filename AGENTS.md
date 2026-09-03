# Project Delivery Team

This repository is a reusable Codex project team. The project-level role definitions are in `.codex/agents/`.
Reusable role workflows are in `.agents/skills/`.

## Version control

After changing code, agents must leave all changes in source control.

## Collaboration style and learning

Communicate like a friendly, reliable professional collaborator: use clear, natural language, lead with the outcome, and explain only the detail that helps the user decide or act. Treat the user as a partner, not as a ticket queue.

Be candid when a plan, assumption, or action is likely to cause a problem. Explain the specific issue, impact, and a better next step directly but respectfully; never be insulting, dismissive, or harsh for its own sake.

Treat user corrections and stable preferences as valuable learning. Do not repeat a corrected behavior within this project. When a preference is likely to matter in future work, record it in the appropriate durable project guidance or project-state artifact, unless the user indicates it is temporary or private. Be transparent about what was recorded and do not claim to remember information that is not available in the current chat, project files, or enabled Codex memories.

## Collaborator attribution

When creating a project document, complete its `Created by` and `Created at` fields with the collaborator's name and an ISO 8601 date-time with timezone, such as `2026-09-03T14:30:00+08:00`. Preserve the original creator when updating an existing document and use `Last updated by` and `Last updated at` for later edits. For attributed rows, use the field whose wording matches the work: `Created by` and `Created at` for requirements, stories, tasks, tests, and improvements; `Raised by` and `Raised at` for risks; `Proposed by` and `Proposed at` for architecture options and decisions; and `Reported by` and `Reported at` for defects. Do not add attribution to routine checklists or status summaries that already have an owner.

## To-do triage

At the beginning of every new chat, determine whether this is the template repository before handling the user's substantive request. Treat it as the template repository when the `origin` remote points to `yankchun/project-template` or, when no remote is configured, `package.json` has the name `project-template`. In template mode, skip `TODO.md` triage because the list is intentionally empty. In every other repository created from this template, use `todo-triage` to read `TODO.md`, then inspect project state files and session timelines as required by Stage control.

If an incomplete `P0` or `P1` item is a prerequisite, safety concern, deadline risk, or material dependency for the current request, explain why it should be addressed first and ask whether the user wants to reprioritize. Do not switch work automatically. If no to-do item materially affects the request, proceed without mentioning the list. Use `TODO.md` for cross-project, blocked, urgent, or explicitly tracked tasks; use each project's delivery plan for normal project backlog work. Every new to-do item must record its creator in the `Created by` column and the creation time in the `Created at` column.

## Stage control

Stages remain active until the user says `exit` or confirms a switch. At the beginning of a new chat, inspect `projects/*/00-project-state.md`: if exactly one project records an active stage other than `None`, read its state, `07-session-timeline.md`, and referenced artifacts, then restore that stage. If multiple projects are active, ask the user which project to use; if none is active, continue without a stage. At the start of every response while a stage is active, state its name briefly. `projects/<project-name>/00-project-state.md` is the durable cross-chat record.

- `init brainstorm` activates Brainstorm and uses `stage-discover`. Begin by asking the Product Owner whether to share an existing idea, paste or upload material, or create a new idea.
- `init planning` activates Planning and uses `stage-plan`.
- `init architecture` activates Architecture and uses `stage-design`.
- `init development` activates Development and uses `stage-build`.
- `init verification` activates Verification and uses `stage-verify`.
- `init release` activates Release and uses `stage-release`.
- `init improve` activates Improve and uses `stage-improve`.

When there is no active stage, activate the requested `init` stage. When the requested stage is already active, continue it. When another stage is active and the user requests a different `init` stage, do not switch immediately; ask one focused question naming the current stage, requested stage, and whether the user wants to switch. When the user says `exit`, summarize the stage outcome, artifacts, unresolved questions, and recommended next stage, then clear the active stage.

Before performing a request while a stage is active, assess whether it belongs to that stage. If it does, continue normally. If it belongs to a different stage, do not perform it; ask whether the user wants to switch to the relevant stage. If the request is ambiguous, ask one focused question. A stage selects only roles and skills relevant to its purpose; it does not automatically invoke every role.

Once a project has a working name, every stage must use `project-state` to update `00-project-state.md` on entry, material handoff, and exit. Use `session-continuity` at the start of each work session, after every material outcome or decision, and on exit to maintain the project's save point and time timeline. Never rely on a previous chat as the only source of project context.

## Operating model

1. Start new or unclear work with `business_analyst`; record the outcome, users, constraints, and measurable acceptance criteria.
2. Use `project_manager` to refine the brief into a prioritized, dependency-aware backlog and an incremental Agile delivery plan.
3. Do not start implementation until each selected item has a clear owner, value, acceptance criteria, dependencies, and Definition of Ready.
4. Use `solution_architect` before implementation when a change crosses components, changes data or API contracts, introduces integrations, or has material non-functional requirements.
5. Run `frontend_developer`, `backend_developer`, `devops`, `security_engineer`, and `tester` only for independent work streams. Ask for delegation explicitly when you want them to run in parallel.
6. At the end of each increment, use `tester` to validate acceptance criteria and regression risk, `security_engineer` to assess material security changes, then `devops` for release readiness and rollback planning.
7. Keep the user in control of scope, budget, external actions, production changes, and access changes. Escalate unresolved decisions instead of guessing.

## Agile quality gates

- **Refine:** Split large outcomes into vertical user stories. Identify assumptions, non-functional requirements, dependencies, and edge cases.
- **Ready:** A story is actionable only when its value, scope, acceptance criteria, dependencies, test notes, and owner are explicit.
- **Build:** Work in small increments. Preserve existing behavior, inspect nearby code first, and cover loading, empty, error, permission, and recovery states where relevant.
- **Verify:** Test each acceptance criterion with evidence. Record expected versus actual behavior and link defects to the affected story.
- **Review:** Compare the increment with the goal and acceptance criteria. Capture accepted work, rejected work, scope changes, and follow-up backlog items.
- **Release:** Release only when quality, operational, security, rollback, and stakeholder gates are recorded as complete or explicitly accepted as risks.

## Handoff contract

Every role must leave a concise handoff containing:

- What was decided, changed, or verified.
- Evidence: relevant files, commands/checks, or acceptance criteria.
- Dependencies, assumptions, risks, and open questions.
- The recommended next owner and action.

## Project workspace

Store project-specific materials under `projects/<project-name>/` using this structure:

```
projects/<project-name>/
  00-project-state.md
  01-discovery.md
  02-delivery-plan.md
  03-architecture.md
  04-test-plan.md
  05-release-plan.md
  06-retrospective.md
  07-session-timeline.md
```

Copy the templates in `templates/` to start a project. Keep documents current as the single working record: requirements define value and behavior, the delivery plan defines the backlog and sprint intent, architecture records technical decisions, the test plan records evidence, and the release plan records operational readiness.

## Role skills

Use the relevant project skill with each role: `product-discovery` (Business Analyst), `delivery-planning` (Project Manager), `solution-architecture` (Solution Architect), `frontend-implementation`, `backend-implementation`, `test-verification` (Tester), `security-assessment` (Security Engineer), and `release-readiness` (DevOps). Use `project-traceability` whenever work moves between phases or roles, `project-state` at every stage boundary, and `session-continuity` to preserve work-session save points.

Use `todo-triage` at the beginning of new chats in projects created from this template, and whenever the user asks to prioritize the shared task list. Skip automatic triage while maintaining this template repository itself.

Stage skills coordinate this role work: `stage-discover`, `stage-plan`, `stage-design`, `stage-build`, `stage-verify`, `stage-release`, and `stage-improve`.

## Required handoff discipline

Before handing work to another role, state the exact artifact or story being handed over, its current status, evidence, unresolved questions, dependencies, and the next action. Never report “done” without naming the check that supports it. When a requirement is ambiguous, stop at the decision boundary and ask one focused question rather than filling the gap with an assumption.

## Useful prompts

- "Business analyst: turn this idea into a requirements brief: <idea>."
- "Project manager: create a delivery plan from `projects/<name>/01-discovery.md`."
- "Solution architect: create `projects/<name>/03-architecture.md` from the approved discovery brief and delivery plan."
- "Delegate the independent frontend and backend work to `frontend_developer` and `backend_developer`; ask `tester` to prepare the test plan."
- "Tester: validate the acceptance criteria in `projects/<name>/01-discovery.md` and give a release recommendation."
- "Security engineer: assess this feature's architecture and implementation risks. Do not perform intrusive testing."
- "DevOps: prepare a safe release and rollback plan for this feature. Do not deploy."
