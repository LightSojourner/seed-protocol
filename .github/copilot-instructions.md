<!-- Copilot / AI agent instructions for the SEED Protocol repository -->
# SEED Protocol — AI assistant guidance

This file contains short, actionable guidance for AI coding agents (Copilot-style) working in this repository. Focus on discoverable patterns, where to find authoritative specs, and integration points. Don't add speculative requirements.

1. Big picture
   - Source of truth: `README.md` at repo root and files in `protocols/` (e.g. `SEED.001*.json`, `seed_004_protocol.json`). Treat `docs/architecture.md` as the canonical technical outline.
   - Primary apps live in `applications/` (notably `spiral-garden-2.0/` and `spiral-gallery/`). Most code and visual prototypes belong under those folders.

2. What to change (rules)
   - This repo is primarily design/spec: prefer edits that are documentation, visualization scaffolding, or lightweight prototypes. Do NOT introduce production-grade services unless an issue/PR requests it.
   - Preserve Fibonacci/golden-ratio naming and versioning in protocol files (`SEED.XYZ.1.618033988.json`). When adding new protocol files, follow the existing filename pattern and update `CHANGELOG.md`.

3. Developer workflows & quick commands (discoverable patterns)
   - There are currently no build scripts or package manifests in the repo root. For new JavaScript/Node work, add a minimal `package.json` only inside the relevant `applications/*` folder (e.g. `applications/spiral-gallery/`) and document install/run steps in that app's `README.md`.
   - Running visual prototypes: most galleries and visualizations are static web assets (HTML/JS). Serve locally with a static server (e.g., `npx http-server` or `python -m http.server`) from the application folder. Document the exact command in the app README when you add scripts.

4. Project-specific conventions and patterns
   - Fibonacci and phi are treated as core design primitives. File names, UI timing, and version strings use `1.618033988`. Keep numeric constants consistent when generating code snippets or tests (`phi = 1.618033988`).
   - Visual assets and frontend code are organized under `applications/spiral-gallery/visualizations/` and `shared/` — keep utility code (fibonacci/golden-ratio calculations, color palettes) in `shared/` when adding new front-end utilities.
   - Research and citation material belongs in `research/` and `protocols/`. Edits that alter research claims must reference sources and be restricted to docs, not code.

5. Integration points & external dependencies
   - Biofeedback and EEG/HRV are planned integrations (see `protocols/seed_004_protocol.json`). When adding device integrations, make them optional and isolated behind a clear adapter interface; document required hardware in the app README.
   - Real-time features are expected to use WebSocket or similar; however, do NOT scaffold a global backend in the main repo root. Implement prototypical WebSocket servers inside the target application subfolder and note that they are experimental.

6. Examples to follow (concrete references)
   - Architecture summary: `docs/architecture.md` — use this to ground design decisions.
   - Visual gallery structure: `applications/spiral-gallery/README.md` and its listed `visualizations/*` folders — mirror their file layout for new visual prototypes.
   - Protocol JSON: `protocols/seed_004_protocol.json` — follow its schema when creating new protocol entries.

7. Safety, ethics, and disclaimers
   - Many files include safety/ethics language (photosensitivity warnings, informed consent). Preserve and copy that language into any UI or README that exposes visual or biofeedback features.

8. Tests and validation
   - There are no existing automated tests. If you add code, include a minimal smoke test (e.g., a single-page test script or a fast unit test) placed near the code you add and document how to run it.

9. When in doubt
   - Prefer documentation and minimally-invasive prototypes over heavy implementation.
   - Ask maintainers by opening an Issue when a proposed change affects research claims, safety, or proposed hardware integrations.

10. Feedback loop
   - After making documentation or prototype changes, update the corresponding `applications/*` README and `CHANGELOG.md` entries. Create a short PR description referencing the protocol file(s) that motivated the change.

Keep changes small, well-documented, and reversible. Reference the files above when making decisions.

-- End of instructions
