let grades = [100, 90, 110, 101, 12, 70];
let student = { id: 1, name: 'jose', app: 'montoya' };
student.grades = grades;

console.log(student);

let grades2 = [100, 70, 88];
// ... spread operator
student.grades = [ ...student.grades, ...grades2 ];
const data = { age: 20, hobby: 'play videogames' };
student = { ...student, ...data };
console.log('RESULTADO JOIN GRADES', student);