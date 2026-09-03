---
name: stage-release
description: Start the Release stage when the user says "init release" to prepare a safe release, monitoring, and rollback plan.
---

# Release Stage

Use this stage after Verification recommends release. DevOps leads, with Tester supplying test evidence and Security Engineer supplying the security assessment when applicable.

Use `release-readiness`, `project-traceability`, and `project-state`. Record deployment sequencing, environment checks, monitoring, communication, rollback triggers, and rollback steps. Planning a release does not authorize a deployment or any production change.

Conclude with release readiness status, incomplete gates or accepted risks, and the exact user authorization required before external actions.
