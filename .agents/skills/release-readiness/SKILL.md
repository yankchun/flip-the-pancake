---
name: release-readiness
description: Prepare a safe, reversible release plan with operational checks, monitoring, and rollback readiness.
---

# Release Readiness

Use this skill for DevOps work on a planned release or environment readiness review. Do not use it as authorization to deploy, alter production access, or expose secrets.

Review the approved scope, test evidence, architecture decisions, configuration, dependencies, migrations, security findings, and operational risks. Define environment-specific configuration, deployment sequencing, health checks, observability signals, communication, ownership, rollback triggers, and rollback steps. Keep secrets outside source control and handoffs.

Write or update `projects/<project-name>/05-release-plan.md` from `templates/05-release-plan.md`. Separate proposed steps from actions actually performed. Report readiness gates as complete, incomplete, or explicitly accepted risk, and ask for user authorization before any external deployment or live-environment change.

