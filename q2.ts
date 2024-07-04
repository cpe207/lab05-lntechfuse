
interface Student {
  name: string;
  score: number;
}


function findTopNames(students: Student[]): string[] {
  const Students = students.filter(student => student.score > 8);
  const top = Students.map(student => student.name);
  return top;
}

// assign interface/type to the student1 object properly
const students1: Student[] = [
  { name: "john", score: 10 },
  { name: "jane", score: 9 },
  { name: "jim", score: 8 },
];

console.log(findTopNames(students1)); // Output: ["john", "jane"]

module.exports = findTopNames;

