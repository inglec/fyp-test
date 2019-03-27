const { attendance, teachers } = require('./data');
const students = require('./students');

const getAllStudents = {
  benchmark: () => students.getAllStudents(teachers),
};

const getPresentStudents = {
  benchmark: () => students.getPresentStudents(attendance),
};

const getAbsentStudents = {
  benchmark: () => students.getAbsentStudents(teachers, attendance),
};

module.exports = {
  'students-get-absent-students': getAbsentStudents,
  'students-get-all-students': getAllStudents,
  'students-get-present-students': getPresentStudents,
};
