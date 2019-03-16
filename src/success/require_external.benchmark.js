const requireExternal = require('./require_external');

const partitionObject = {
  benchmark: () => {
    const object = { a: 1, b: 2, c: 3 };
    const isEven = number => number % 2 === 0;

    return requireExternal.partitionObject(object, isEven, 'even', 'odd');
  },
};

module.exports = {
  'require-external-partition-object': partitionObject,
};
