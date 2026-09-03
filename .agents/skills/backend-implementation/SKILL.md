---
name: backend-implementation
description: Implement an approved backend story with explicit contracts, data safety, authorization, and targeted verification.
---

# Backend Delivery

Use this skill for Backend Developer work on a story that meets the Definition of Ready. Do not use it to deploy, change production data, or make unapproved architecture choices.

Inspect the existing execution path and architecture before editing. Define or preserve API contracts, validation, authorization, data ownership, error behavior, observability, compatibility, and migration requirements. Make only the smallest coherent implementation change and protect secrets and sensitive information.

Run relevant automated checks. If a migration or contract change is required, document its compatibility path, rollback implications, and dependent consumers. Record changed files, implemented behavior, interfaces or data changes, checks run and results, operational considerations, and the handoff to `tester` or `devops`.
