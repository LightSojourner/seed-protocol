## SEED Protocol — concise AI assistant guidance

This repository is research-first: small prototypes, specs, and visualizations. Below are the minimal, discoverable rules and pointers an AI assistant needs to be productive here.

1) Big picture — where to look
- Source-of-truth docs: `README.md` (repo root) and `docs/architecture.md`.
- Protocols/specs live in `protocols/` (e.g. `SEED.001*.json`, `seed_004_protocol.json`) — treat these JSON files as authoritative for protocol shape and versioning.
- Primary applications and prototypes are under `applications/` (notable folders: `spiral-garden-2.0/`, `spiral-gallery/`, `ai-optimization-center/`). Frontend visuals and experimental servers live inside each app's subfolder.

2) Editing rules (do's and don'ts)
- This repo prefers documentation and lightweight prototypes. Avoid adding production-grade services at the repo root.
- If adding JS/Node packages, add `package.json` only inside the target `applications/<app>/` folder and document install/run steps in that app's `README.md`.
- Follow existing naming/version pattern for protocol files: include the golden-ratio suffix (`1.618033988`) in protocol filenames and update `CHANGELOG.md` when adding protocols.

3) Quick developer workflows (explicit commands)
- Serve static visual prototypes from an app folder (examples):
  - Python: `python -m http.server 8000` (run inside `applications/<app>/public` or equivalent)
  - Node: `npx http-server . -p 8000` (if you add a package.json locally)
- Run tests for `ai-optimization-center` (has a `package.json`): inspect `applications/ai-optimization-center/package.json` and run `npm install` then `npm test` in that folder.

4) Project-specific conventions and patterns
- Fibonacci / phi is a design primitive. Use the constant `phi = 1.618033988` for naming, timing, and version strings when adding new code or tests.
- Visual code and utilities: put shared UI/math helpers under `shared/` or the respective `applications/<app>/shared/` directory.
- Protocol JSON schema: mirror existing files in `protocols/` (use `seed_004_protocol.json` as the schema example).

5) Integration points & cross-component communication
- Biofeedback mock and generators: `applications/spiral-garden-2.0/mock-biofeedback/` contains example generators (HRV/EEG mocks). Use these for local testing rather than adding live device hooks.
- Real-time experiments should remain inside individual apps (e.g., `applications/<app>/server.js`). Do not add a monolithic backend at repo root.

6) Safety and research constraints
- Many artifacts include safety/ethics language (photosensitivity, consent). Preserve this language when exposing visuals or biofeedback features in UIs or READMEs.

7) When making changes
- Keep PRs small and focused. Update the app README and `CHANGELOG.md` for any protocol or research-facing change.
- If a change affects research claims or safety, open an Issue and request maintainer review (do not merge without human approval).

Examples to inspect quickly:
- `docs/architecture.md` — architecture overview
- `protocols/seed_004_protocol.json` — protocol schema example
- `applications/spiral-garden-2.0/mock-biofeedback/` — HRV/EEG mock generators

If anything here is unclear or you want extra examples (tests, adapter template, or a sample protocol file), tell me which area to expand.

-- concise end
