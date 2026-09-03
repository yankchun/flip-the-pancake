---
name: session-continuity
description: Maintain project save points and a work-session timeline so new chats can resume work with recorded session time and breaks.
---

# Session Continuity

Use this skill for every named project at the beginning of a work session, after a material outcome, and before ending work. Its purpose is to make a project resumable without relying on previous chat history.

Ensure `projects/<project-name>/07-session-timeline.md` exists from `templates/07-session-timeline.md`. Read it together with `00-project-state.md` before resuming work.

At a new-chat resume, calculate the break from the prior recorded session end or checkpoint to the current session start. Add a new session entry, record the break in the time summary, and mirror the current session start and break in the state file. Briefly tell the user what was last saved, where work will resume, total recorded session time, and the time since the last saved activity.

After a material decision, artifact update, completed task, blocker, handoff, or stage change, add a concise checkpoint. Update both the timeline's Current save point and the state file's Save point with the same resume action. Do not log routine chat acknowledgements or duplicate unchanged state.

When ending work or exiting a stage, close the open session with an ISO 8601 date-time including timezone, calculate its session duration from the recorded start and end, and update the cumulative recorded session time. Use recorded timestamps only: do not claim the timeline can distinguish active effort from idle time inside an open session.

Preserve historical entries. If a session was left open because a chat ended unexpectedly, close it at the most recent checkpoint time before starting the resumed session. Attribute document changes and timeline entries according to the collaborator-attribution rules in `AGENTS.md`.
