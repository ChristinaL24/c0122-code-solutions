/* exported getStudentNames */
function getStudentNames(students) {
  var studentNames = [];
  for (var i = 0; i < students.length; i++) {
    studentNames.push(students[i].name);
  }
  return studentNames;
}

// Another way to complete:
// function getStudentNames(students) {
//   var studentNames = [];
//   for (var i = 0; i < students.length; i++) {
//     var student = students[i].name;
//     studentNames.push(student);
//   }
//   return studentNames;
// }
