# AI Optimization Center (prototype)

Quick prototype to run optimization jobs locally using a simple random-search engine.

Usage:
- Start server: `npm start`
- Start CLI job: `node src/cli.js run my-job --trials 30`
- Start CLI job with config space file: `node src/cli.js run my-job --space path/to/space.json`
- Browse experiments in `data/` directory

Note: `data/` is gitignored for local experiment artifacts.
