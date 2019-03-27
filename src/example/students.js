const { chain, difference } = require('lodash');

const { getAllStudents } = require('./native');

const getPresentStudents = attendance => (
  chain(attendance)
    .flatMap(teacher => teacher.students)
    .sort()
    .sortedUniq()
    .value()
);

const getAbsentStudents = (teachers, attendance) => {
  const allStudents = getAllStudents(teachers);
  const presentStudents = getPresentStudents(attendance);

  return difference(allStudents, presentStudents);
};

module.exports = {
  getAbsentStudents,
  getAllStudents,
  getPresentStudents,
};
