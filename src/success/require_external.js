const _ = require('lodash');

const partitionObject = (collection, predicate, key1 = 'true', key2 = 'false') => (
  _.reduce(
    collection,
    (acc, value, key) => {
      acc[predicate(value, key) ? key1 : key2][key] = value;
      return acc;
    },
    { [key1]: {}, [key2]: {} },
  )
);

module.exports = { partitionObject };
