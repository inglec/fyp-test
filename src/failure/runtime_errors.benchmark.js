const runtimeErrors = require('./runtime_errors');

const notAFunction = {
  benchmark: () => runtimeErrors.notAFunction(),
  maxAttempts: 3,
};

const randomError = {
  benchmark: () => runtimeErrors.randomError(),
  runs: 3,
  maxAttempts: 10,
};

module.exports = {
  'runtime-errors-not-a-function': notAFunction,
  'runtime-errors-random-error': randomError,
};
