/**
 * Paso por valor funciona en tipos primitivos
 */

let num = 10;
let name = 'jose montoya';

console.log('antes num', num);
let num2 = num;
num = 20;
console.log('num', num); // 20
console.log('num2', num2); // 10

console.log('antes name', name);
let name2 = name;
name = 'lusito comunica';
console.log('name', name); // lusito comunica
console.log('name2', name2); // jose montoya

/**
 * Paso por referencia en tipos complejos
 */
let array = [100, 90, 110, 101, 12, 70];
let student = { id: 1, name: 'jose', app: 'montoya' };

console.log('antes array', array);
// let array2 = array // genera referencia
let array2 = [ ...array ]; // copy with reference
console.log('temporal array2', array2);
array[0] = 999;
console.log('array', array); // ?? array[0] // 999
console.log('array2', array2); // ?? array2[0] // 999

console.log('antes student', student);
// let student2 = student;  // genera referencia
let student2 = { ...student }; // copy with reference
console.log('temporal student2', student2);
student.name = 'luisito';
console.log('student', student); // ?? student.name // luisito
console.log('student2', student2); // ?? student2.name // luisito