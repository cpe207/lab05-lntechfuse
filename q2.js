function findTopNames(students) {
    var Students = students.filter(function (student) { return student.score > 8; });
    var top = Students.map(function (student) { return student.name; });
    return top;
}
// assign interface/type to the student1 object properly
var students1 = [
    { name: "john", score: 10 },
    { name: "jane", score: 9 },
    { name: "jim", score: 8 },
];
console.log(findTopNames(students1)); // Output: ["john", "jane"]
module.exports = findTopNames;
