const express = require('express');
const bodyParser = require('body-parser');
const experiments = require('./store');
const jobRunner = require('./jobRunner');

const app = express();
app.use(bodyParser.json());

app.post('/jobs/start', async (req, res) => {
  try {
    const { name, configSpace, trials } = req.body;
    if (!configSpace || typeof configSpace !== 'object') {
      return res.status(400).json({ error: 'configSpace (object) is required' });
    }
    const job = await jobRunner.startJob({ name, configSpace, trials: trials || 50 });
    return res.status(202).json(job);
  } catch (err) {
    console.error('Error starting job', err);
    return res.status(500).json({ error: 'internal_error' });
  }
});

app.get('/experiments', (req, res) => {
  res.json(experiments.list());
});

app.get('/experiments/:id', (req, res) => {
  const item = experiments.get(req.params.id);
  if (!item) return res.status(404).json({ error: 'not_found' });
  res.json(item);
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`AI Optimization Center running on port ${port}`));
