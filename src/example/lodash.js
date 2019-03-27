const { chain } = require('lodash');

const getAllStudents = teachers => (
  chain(teachers)
    .flatMap(teacher => teacher.students)
    .sort()
    .sortedUniq()
    .value()
);

module.exports = { getAllStudents };
