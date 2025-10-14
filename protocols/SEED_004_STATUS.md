# SEED.004 Status Note

## Current State

SEED.004 documentation exists in three files:
- `protocols/seed_004_protocol.json` - Complete protocol specification (569 lines)
- `protocols/seed_004_research_synthesis.md` - Research foundations (655 lines)
- `protocols/seed_004_changelog.md` - CHANGELOG entry draft (385 lines)

## Decision: Keep as Development/Draft

**Rationale:**
1. The protocol clearly states Phase 3 status as "IN_DEVELOPMENT"
2. Implementation roadmap targets Q1-Q4 2026
3. Milestones include "technical alpha", "beta testing", etc. - not yet achieved
4. SEED.003 shows Phase 2 as "IN_DEVELOPMENT", suggesting Phase 2 is also incomplete

## Recommendations:

### Option A: Move to Draft Directory (RECOMMENDED)
- Create `protocols/drafts/` directory
- Move SEED.004 files there
- Update CHANGELOG to reference draft status
- Keep SEED.003 as the latest "released" protocol

### Option B: Integrate as Design Specification
- Rename files to follow convention: `SEED.004.1.618033988.json`
- Add prominent "DESIGN SPECIFICATION - NOT IMPLEMENTED" notice
- Update main CHANGELOG with clear status
- Acknowledge this is vision, not working code

### Option C: Keep As-Is
- Leave current file naming
- Add clarifying README in protocols/
- Document that .004 is specification only

## Chosen Approach: Option B with Clarifications

We'll:
1. Keep SEED.004 files in place (they're well-organized as supporting docs)
2. Add a STATUS.md in protocols/ explaining the progression
3. Update README to clarify what's implemented vs. designed
4. Add prominent notices in SEED.004 files themselves

This maintains the forward-looking vision while being honest about current state.
