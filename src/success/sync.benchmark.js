const sync = require('./sync');

const addNumbers = {
  benchmark: () => sync.addNumbers(1, 2, 3),
  runs: 10,
};

module.exports = {
  'sync-add-numbers': addNumbers,
};
