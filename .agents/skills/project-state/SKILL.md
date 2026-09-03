---
name: project-state
description: Maintain a durable project-state record so a new chat can safely resume the current lifecycle stage and its decisions.
---

# Project State

Use this skill whenever a project stage starts, reaches a material handoff, or exits. Its purpose is to preserve context across chats; do not treat chat history as the durable project record.

Once the project has a working name, ensure `projects/<project-name>/00-project-state.md` exists by copying `templates/00-project-state.md`. Before updating it, read the current state and the relevant project artifacts. Ensure `07-session-timeline.md` exists as well by copying its template, then use `session-continuity` to maintain the associated save point.

On stage entry, record the active stage, current objective, selected stories or scope, and immediate next action. At a material handoff, record the outcome, artifacts updated, evidence, dependencies, open questions, risks, recommended next owner, and recommended next stage. On `exit`, mark the active stage as `None` and record the completed or blocked stage outcome.

Keep this file concise and current. Mirror the latest session checkpoint, current session start, recorded session time, and most recent break from `07-session-timeline.md` in the Save point section. Preserve stable story and decision IDs. At the beginning of a new chat, inspect `projects/*/00-project-state.md` before handling project work. If exactly one project records an active stage other than `None`, read that file, its session timeline, and referenced artifacts, summarize the current position, and restore that stage as active. If there are multiple active projects, list them and ask the user which one to use. If none is active, continue without a restored stage.
