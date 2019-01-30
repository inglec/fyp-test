const utils = require('./utils');

test('sum 1, 2, 3 equals 6', () => {
  expect(utils.sum(1, 2, 3)).toBe(6);
});
