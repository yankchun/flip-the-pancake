---
name: test-verification
description: Derive risk-based tests from acceptance criteria, verify an increment, and issue an evidence-based release recommendation.
---

# Quality Verification

Use this skill for Tester work while preparing test coverage or verifying a completed increment. Do not use it to change product behavior merely to make a test pass.

Trace every applicable acceptance criterion to one or more test scenarios. Cover happy paths and relevant validation, permissions, loading, empty, error, recovery, integration, accessibility, and regression risks. Prefer stable automated coverage where it gives lasting value; complement it with targeted manual checks when needed.

Write or update `projects/<project-name>/04-test-plan.md` from `templates/04-test-plan.md`. Record tests run, expected and actual results, evidence, and uncovered risk. Report each defect with severity, affected story or requirement ID, reproduction steps, and a clear release impact. Hand a release recommendation to `security_engineer` for material risk changes and `devops` for operational readiness.
