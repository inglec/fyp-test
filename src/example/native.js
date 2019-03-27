const getAllStudents = (teachers) => {
  const teacherValues = Object.values(teachers);

  const allStudents = teacherValues.reduce((acc, teacher) => {
    teacher.students.forEach((student) => {
      if (!acc.includes(student)) {
        acc.push(student);
      }
    });

    return acc;
  }, []);

  allStudents.sort();

  return allStudents;
};

module.exports = { getAllStudents };
