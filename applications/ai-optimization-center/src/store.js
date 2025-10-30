const fs = require('fs');
const path = require('path');

const DATA_DIR = path.resolve(__dirname, '..', 'data');
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

function filepath(id) {
  return path.join(DATA_DIR, `${id}.json`);
}

function save(id, obj) {
  fs.writeFileSync(filepath(id), JSON.stringify(obj, null, 2));
}

function load(id) {
  const p = filepath(id);
  if (!fs.existsSync(p)) return null;
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function list() {
  return fs
    .readdirSync(DATA_DIR)
    .filter((f) => f.endsWith('.json'))
    .map((f) => JSON.parse(fs.readFileSync(path.join(DATA_DIR, f), 'utf8')));
}

module.exports = {
  save,
  get: load,
  list
};
