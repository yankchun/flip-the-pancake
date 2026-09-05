# Discovery Brief — Flip the Pancake

## Document control

- Created by: Codex
- Created at: 2026-09-03T23:59:46+08:00
- Product owner / decision maker: User
- Business analyst: Codex
- Last updated by: Codex
- Last updated at: 2026-09-04T00:30:54+08:00
- Status: Draft
- Decision deadline: Not set

## Problem and outcome

- Problem: Players need a fun, understandable cooking-game challenge that rewards skill and sustained progression.
- Target users: Broad casual audience, including players on desktop and mobile browsers.
- Desired business outcome: Deliver an engaging web game in which players serve correct pancake orders and compete for the highest level reached.
- Success measures (baseline, target, measurement date): To be confirmed.
- Non-goals: Technical implementation, monetisation, and final visual style are not yet decided.

## Scope

### In scope

- Cook pancakes exclusively by making a pan-flip gesture that evokes real-life flipping.
- Serve customer orders for one or more pancakes.
- Add requested honey, jam, or butter.
- Increase challenge from level 1 onward.
- Give the player one life: a burned pancake ends the run and restarts at level 1.
- Rank players from highest to lowest level reached.
- Run as one responsive web game in desktop and mobile browsers.

### Out of scope

- Detailed authentication provider and timed flip-window feedback design until confirmed.

## Requirements

| ID | User story / requirement | Created by | Created at | User value | Priority | Acceptance criteria | Notes / edge cases |
| --- | --- | --- | --- | --- | --- | --- | --- |
| R-01 | As a player, I want to cook pancakes by making a pan-flip gesture so that the core skill feels like real-life pancake flipping. | Codex | 2026-09-03T23:59:46+08:00 | Core game skill and enjoyment. | Must | On desktop, the player flips only through a mouse gesture; on mobile, the player flips only through a touch gesture. Each pancake must cook for 3 seconds, then be flipped during the next 3 seconds; missing that window burns it. | Define gesture threshold. |
| R-02 | As a player, I want to fulfil orders containing a requested number of pancakes and toppings so that I can serve customers correctly. | Codex | 2026-09-03T23:59:46+08:00 | Gives each round a clear objective. | Must | Level 1 has one customer order for one pancake. Customer waiting has no time limit. | Clarify level-1 topping and multiple-topping rules. |
| R-03 | As a player, I want levels to become harder so that progressing stays challenging. | Codex | 2026-09-03T23:59:46+08:00 | Sustains replayability. | Must | Level 1 has one pancake requiring two successful flips. A burned pancake ends the run and restarts the player at level 1. Levels 2–10 follow the defined order curve; from level 11, customer orders scale customer count, pancake count, toppings, and per-pancake flip requirements from two to four. | The three-second cook and flip window applies to every required flip. |
| R-04 | As a player, I want to sign in with email or play as a guest so that I can choose the amount of identity and persistence I want. | Codex | 2026-09-04T00:25:14+08:00 | Lets anyone start playing while rewarding registered players with saved identity and progress. | Must | A player can sign in with email; their score record is tied to that account and they can change their display name. A guest can play without registration and receives a system-assigned default name in the form “Pancake Master N”, beginning at 1 and incrementing for each guest identity. The guest identity is retained in a browser cookie. | If the guest clears cookies or plays in incognito mode, they cannot reclaim that guest identity. |
| R-05 | As a player, I want to view rankings by highest level reached so that I can compare my progress. | Codex | 2026-09-03T23:59:46+08:00 | Adds competition and a replay goal. | Should | Rankings sort by highest completed level first. Where players tie, the most recently achieved result ranks higher and pushes older equal-level results down. The system retains the guest's last score for ranking even if their guest cookie becomes unavailable. | The player cannot recover an unlinked guest identity after cookie loss or incognito use. |

### Difficulty progression

Each required flip uses the same timing rule: the pancake cooks for 3 seconds, then must be flipped within the next 3 seconds or it burns. A topping application means one requested honey, jam, or butter selection for a pancake.

| Level | Customer orders and pancakes | Toppings | Flips per pancake | Difficulty purpose |
| --- | --- | --- | --- | --- |
| 1 | 1 customer; 1 pancake | None | 2 | Introduces the timed flip loop. |
| 2 | 1 customer; 1 pancake | 1 application | 2 | Introduces topping selection. |
| 3 | 2 customers; 1 pancake each | 2 applications total | 2 | Introduces two simultaneous customer orders. |
| 4 | 2 customers; 1 pancake each | 1 application per pancake | 3 | Adds an extra cooking cycle. |
| 5 | 2 customers; 2 pancakes for the first and 1 for the second | 1 application per pancake | 3 | Introduces a multi-pancake order. |
| 6 | 2 customers; 2 pancakes each | 1 application per pancake | 3 | Requires managing four pancakes across two orders. |
| 7 | 3 customers; 3 pancakes for the first, 1 for the second, and 2 for the third | 1 application per pancake | 3 | Uses the specified six-pancake, three-customer order. |
| 8 | 3 customers; 3, 2, and 2 pancakes | 1 application per pancake | 3 | Increases total pancakes to seven. |
| 9 | 3 customers; 3, 3, and 2 pancakes | 1 application per pancake | 3 | Increases total pancakes to eight. |
| 10 | 3 customers; 3 pancakes each | 1 application per pancake | 3 | Establishes a demanding nine-pancake service level. |
| 11+ | Increase customers and pancakes per order as levels rise | Increase topping applications as orders rise | 2–4, specified individually for every pancake | Scales every order dimension; never exceed four flips per pancake. |

## Non-functional requirements

| ID | Quality attribute | Created by | Created at | Requirement / threshold | Verification method |
| --- | --- | --- | --- | --- | --- |
| NFR-01 | Accessibility | Codex | 2026-09-03T23:59:46+08:00 | The pan-flip gesture must be easy to discover and operate with the supported desktop mouse and mobile touch inputs. | Usability test of the first level on both device types. |
| NFR-02 | Performance | Codex | 2026-09-03T23:59:46+08:00 | Gameplay interactions should feel responsive on the intended supported devices. | Set measurable target after platform decision. |
| NFR-03 | Compatibility | Codex | 2026-09-04T00:01:32+08:00 | The game must adapt to desktop and mobile browser viewports. | Test core gameplay in representative desktop and mobile browsers. |
| NFR-04 | Privacy and security | Codex | 2026-09-04T00:25:14+08:00 | Email account details and score records must be protected and accessible only to the associated authenticated account; guest identity cookies must not expose sensitive data. | Authentication, authorization, and cookie-security tests selected during architecture. |

## Constraints and dependencies

- Constraints: Must be a responsive web game for desktop and mobile browsers.
- Integrations or data sources: Email authentication, persistent player records, guest-score storage, and a global leaderboard require a backend or managed service.
- Assumptions: The player serves a pancake after completing its requested number of flip cycles; the leaderboard ranks the highest completed level. Where the requested level 3 wording does not assign toppings to individual customers, the draft records two topping applications in total.
- Risks: The one-life rule may make difficulty spikes frustrating; a 3-second flip window needs clear visual feedback; gesture controls must be forgiving enough for a broad casual audience while still creating a skill challenge; account security, privacy, and leaderboard abuse prevention are required for stored scores.
- Open questions (decision owner and due date): Product owner to confirm scope of the first playable release, gesture threshold and feedback, and level-1 toppings. Due date: not set.

## Definition of Ready

Mark a requirement ready for sprint selection only when:

- [ ] User and measurable value are clear
- [ ] Scope and non-goals are explicit
- [ ] Acceptance criteria are observable and testable
- [ ] Dependencies, assumptions, and data needs are identified
- [ ] Security, accessibility, performance, and failure behavior are considered
- [ ] Product owner has resolved decisions that would block implementation
