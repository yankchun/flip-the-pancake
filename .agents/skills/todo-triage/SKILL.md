---
name: todo-triage
description: Review the shared TODO list before work begins and identify relevant blockers or higher-priority work without changing focus automatically.
---

# To-Do Triage

Use this skill at the beginning of a new chat in a project created from this template and whenever the user asks to review or prioritize tasks. Before automatic triage, determine whether the current repository is the template itself: it is template mode when the `origin` remote points to `yankchun/project-template`, or when no remote is configured and `package.json` is named `project-template`. In template mode, skip automatic `TODO.md` review because the list is intentionally empty; still review it when the user explicitly asks.

Identify incomplete `P0` and `P1` items, then assess whether any is a prerequisite, safety concern, deadline risk, or material dependency for the current request. If so, explain the specific conflict and recommend the higher-priority task as the next action. Ask whether the user wants to reprioritize; do not switch focus or modify the list without their direction.

If no listed item materially affects the request, proceed without unnecessary commentary. Keep `TODO.md` concise, use stable IDs, and distinguish cross-project work from work that belongs in a project's delivery plan. When adding a task, record who created it in the `Created by` column and when in the `Created at` column; use the collaborator's name when known, or state that Codex added it on their behalf.
