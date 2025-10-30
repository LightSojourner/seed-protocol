const jobRunner = require('../src/jobRunner');

test('sampleConfig returns values in range', () => {
  const space = {
    a: { type: 'float', min: 0, max: 1 },
    b: { type: 'int', min: 1, max: 3 },
    c: { type: 'categorical', choices: ['x', 'y'] }
  };
  const cfg = jobRunner.sampleConfig(space);
  expect(typeof cfg.a).toBe('number');
  expect(cfg.a).toBeGreaterThanOrEqual(0);
  expect(cfg.a).toBeLessThanOrEqual(1);
  expect(Number.isInteger(cfg.b)).toBe(true);
  expect([1, 2, 3]).toContain(cfg.b);
  expect(['x', 'y']).toContain(cfg.c);
});

test('evaluate returns score between 0 and 1', async () => {
  const { score } = await jobRunner.evaluate({ a: 0.2, b: 0.8 });
  expect(score).toBeGreaterThanOrEqual(0);
  expect(score).toBeLessThanOrEqual(1);
});
