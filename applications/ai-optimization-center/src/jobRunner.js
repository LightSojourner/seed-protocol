const { v4: uuidv4 } = require('uuid');
const store = require('./store');

function sampleConfig(space) {
  const cfg = {};
  for (const [k, spec] of Object.entries(space)) {
    if (spec.type === 'float') {
      cfg[k] = Math.random() * (spec.max - spec.min) + spec.min;
    } else if (spec.type === 'int') {
      cfg[k] = Math.floor(Math.random() * (spec.max - spec.min + 1)) + spec.min;
    } else if (spec.type === 'categorical') {
      cfg[k] = spec.choices[Math.floor(Math.random() * spec.choices.length)];
    } else {
      cfg[k] = spec.default;
    }
  }
  return cfg;
}

// Simple synthetic evaluator — replace with real evaluation logic
async function evaluate(config) {
  let score = 0;
  const numericValues = Object.values(config).filter((v) => typeof v === 'number');
  if (numericValues.length === 0) return { score: 0 };
  for (const v of numericValues) {
    // normalize each numeric between 0 and 1 if possible (assuming caller uses reasonable ranges)
    const normalized = Math.max(0, Math.min(1, v));
    score += 1 - Math.abs(normalized - 0.5);
  }
  score = score / numericValues.length;
  return { score };
}

async function startJob({ name = 'job', configSpace = {}, trials = 50 }) {
  const id = uuidv4();
  const experiment = {
    id,
    name,
    configSpace,
    trials,
    results: [],
    createdAt: new Date().toISOString()
  };
  store.save(id, experiment);

  for (let i = 0; i < trials; i++) {
    const cfg = sampleConfig(configSpace);
    const { score } = await evaluate(cfg);
    const result = { cfg, score, ts: new Date().toISOString() };
    experiment.results.push(result);
    store.save(id, experiment);
  }

  // compute best
  const best = experiment.results.reduce((acc, r) => (r.score > (acc.score || -Infinity) ? r : acc), {});
  experiment.best = best;
  store.save(id, experiment);
  return experiment;
}

module.exports = { startJob, sampleConfig, evaluate };
