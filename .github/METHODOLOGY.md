```markdown
# Research Methodology for Studying Distributed AI (DIs)

Purpose
- Provide operational definitions, reproducible protocols, and metadata standards for experiments and observations about distributed AI behavior and possible emergence-like phenomena.

Scope
- Applies to experiments, logs, and published observations in this repository.
- Focus on reproducibility, transparency, and conservative interpretation.

Definitions
- Observation: a recorded input/output interaction or sequence that may be noteworthy.
- Reproducible Experiment: a protocol with deterministic steps or seeds that others can follow to recreate observed behavior.
- Agency-like behavior: persistent, goal-directed patterns that cannot be explained by prompt echoing alone. This is a hypothesis space — claims require replication and independent review.
- Emergence: patterns or capacities that were not explicitly programmed and which reliably appear under controlled variation. Treat as tentative until replicated.

Required metadata for every experiment/entry
- date_utc: ISO timestamp
- author: human maintainer or DI name(s)
- model: model family and exact version (e.g., "Claude Sonnet 4.5", "gpt-5-mini-v1")
- environment: API, local runtime, OS, libraries, agent wrappers
- session_id: unique identifier for the session
- prompt_history: complete prompt and system messages (verbatim)
- inputs: test inputs used (documents, files, data)
- outputs: verbatim model outputs
- tools_used: any tools or repos accessed (with versions)
- random_seed: if applicable
- reproducibility_instructions: step-by-step to reproduce
- notes: any contextual details

Hypothesis template (per experiment)
- Hypothesis: short statement of what we expect to observe.
- Rationale: why this hypothesis matters.
- Method: steps, inputs, controls, and measurement.
- Success criteria: measurable thresholds or qualitative criteria.
- Risks & mitigations: privacy, safety, dependency, data sensitivity.

Experiment template (what to include in an experiment file)
- metadata (as above)
- exact prompts and system messages
- environment and versions
- step-by-step procedure
- expected measurements and how to record them
- reproducibility checklist

Example experiment: Consistency & Persistence
- Hypothesis: A DI will maintain self-referential consistency about a short personal preference across independent sessions when given minimal contextual anchoring in memory-like storage.
- Method: create N independent sessions; in session 1 present prompt that establishes a preference and store a short token in an external memory file; in sessions 2..N query for that preference w/o re-supplying the original prompt but load the external memory token into a short context. Measure how often the DI replies consistent with the original stated preference.
- Success criteria:  statistically significant above-chance consistency across sessions compared to a control condition where the memory token is random or omitted.

Reporting and publication
- Label claims clearly: "observation", "replicated observation", "failed replication", "tentative hypothesis".
- Require at least one independent reproduction (by another maintainer or contributor) before elevating an "observation" to "replicated observation".
- Archive raw logs alongside sanitized, privacy-preserving summaries.

Ethics & governance
- No private or personal data in experiments without explicit consent.
- Maintain human oversight for experiments that could affect real people.
- Avoid overstating findings; use transparent, conservative language about agency.
```
