const { difference } = require('lodash');

const { getAllStudents } = require('./native');

const getAbsentStudents = (teachers, attendance) => {
  const allStudents = getAllStudents(teachers);
  const presentStudents = getAllStudents(attendance);

  return difference(allStudents, presentStudents);
};

module.exports = {
  getAbsentStudents,
  getAllStudents,
};
