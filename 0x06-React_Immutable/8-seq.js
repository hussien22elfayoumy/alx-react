import { Seq } from 'immutable';

function printBestStudents(obj) {
  const bestStudents = Seq(obj).filter((student) => student.score >= 70);

  const formattedStudents = bestStudents.map((student) => ({
    ...student,
    firstName:
      student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1),
    lastName:
      student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1),
  }));

  console.log(formattedStudents.toObject());
}
