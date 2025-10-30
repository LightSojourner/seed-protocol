#!/usr/bin/env node
const yargs = require('yargs');
const jobRunner = require('./jobRunner');
const fs = require('fs');
const path = require('path');

yargs
  .command(
    'run <name>',
    'Run a job with a simple example config space (or pass --space file.json)',
    (y) =>
      y
        .positional('name', { describe: 'job name', type: 'string' })
        .option('trials', { alias: 't', type: 'number', default: 20 })
        .option('space', { alias: 's', type: 'string', describe: 'path to configSpace JSON file' }),
    async (argv) => {
      let configSpace;
      if (argv.space) {
        const p = path.resolve(process.cwd(), argv.space);
        if (!fs.existsSync(p)) {
          console.error('configSpace file not found:', p);
          process.exit(2);
        }
        configSpace = JSON.parse(fs.readFileSync(p, 'utf8'));
      } else {
        configSpace = {
          frequency: { type: 'float', min: 0.0, max: 1.0 },
          duration: { type: 'int', min: 10, max: 300 },
          geometry: { type: 'categorical', choices: ['mandala', 'torus', 'spiral'] }
        };
      }

      console.log('Starting job:', argv.name);
      const job = await jobRunner.startJob({ name: argv.name, configSpace, trials: argv.trials });
      console.log('Job completed:', job.id);
      console.log('Best score:', job.best.score);
      console.log('Best config:', JSON.stringify(job.best.cfg, null, 2));
    }
  )
  .command('list', 'List experiments', async () => {
    const store = require('./store');
    console.log(store.list());
  })
  .help().argv;
