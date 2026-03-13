---
name: kid-zone
description: Builds and maintains the Kids Zone section with child-friendly games (tic-tac-toe, memory game, coloring pages, math game). Use when working on kids zone, adding or editing these games, improving child UX, or increasing audience/traffic for kids content. Prioritizes audience growth first; ad monetization is a later phase.
---

# Kids Zone

## Purpose and goals

- **Audience first**: Maximize visitors and engagement for children. Monetization (e.g. ads) comes in a later phase.
- **Routes**: All under `/kids-zone/`:
  - `/kids-zone/` — hub/landing
  - `/kids-zone/tic-tac-toe`
  - `/kids-zone/memory-game`
  - `/kids-zone/coloring-pages`
  - `/kids-zone/math-game`

## Child-friendly UX (increase engagement and return visits)

- **Touch targets**: Large tap/click areas (min ~44px), generous spacing.
- **Visuals**: Bright, cheerful palette; clear icons; minimal text; big, readable fonts.
- **Navigation**: Simple and consistent — back to hub, clear game titles, no deep menus.
- **Feedback**: Immediate response to actions (sounds optional), clear win/next-step states.
- **Safety**: No external links in play area, no user-generated content in primary flow; COPPA-aware when adding ads later.
- **Performance**: Fast load, works on low-end devices and slow networks (critical for broader audience).

## Audience growth (phase 1)

- **SEO**: Descriptive titles and meta descriptions per page (e.g. “Free Tic-Tac-Toe Game for Kids”), clean URLs.
- **Shareability**: Consider “Play again” and simple share prompts (e.g. “Share this game with a friend”) where appropriate.
- **Mobile-first**: Most kids use phones/tablets; responsive layout and touch-first controls.
- **Entry point**: Prominent link to Kids Zone from main site (e.g. nav or homepage) so new visitors can find it easily.

## Game implementation notes

| Game | Focus |
|------|--------|
| **Tic-tac-toe** | 3×3 grid, two players (or vs simple AI), clear turn and win state. |
| **Memory game** | Card flip, match pairs; configurable grid size (e.g. 4×4, 6×6); timer or move count optional. |
| **Coloring pages** | Simple canvas or SVG; fill regions by tap/click; palette of colors; optional save/print. |
| **Math game** | Short problems (add/subtract/multiply); difficulty levels; instant feedback and next question. |

Keep each game self-contained (single HTML or SPA route) with minimal dependencies. Reuse site nav/header/footer where it fits the main site.

## Later phase: monetization

- When adding ads: use child-safe, COPPA-compliant placements and networks; avoid behavioral tracking on kids; keep ad density low so UX stays fun and fast.
- Do not implement ad logic in phase 1; this skill only reminds to plan for it later.

## Consistency with main site

- Reuse existing design tokens (e.g. from `styles.css` or `contact.html`: fonts like Poppins/Playfair, saffron/gold/cream) so Kids Zone feels part of the same brand while still feeling fun and age-appropriate (e.g. slightly bolder colors, rounder shapes for kids).
