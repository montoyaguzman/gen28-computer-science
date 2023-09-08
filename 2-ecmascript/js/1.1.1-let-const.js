// 1. Que tipados existen en los lenguajes
// Debil (no es necesario especificar de dato) y fuerte (si se tiene que especificar el tipo)

// JS es debilmente tipado o fuertemente tipado??
// Debilmente tipado

// var hasPermission = false;
// console.log('hasPermission fuera 1: ', hasPermission);

// EJEMPLO VAR
// function calculateAge() {
//   var isMayor = 20;
//   if (isMayor > 18) {
//     hasPermission = true;
//     console.log('hasPermission dentro: ', hasPermission);
//   }
// }

// calculateAge();

// console.log('hasPermission fuera 2: ', hasPermission);

// EJEMPLO LET
// function calculateAge() {
//     let isMayor = 20;
//     // var hasPermission;
//     if (isMayor > 18) {
//       var hasPermission = true;
//       console.log('hasPermission dentro: ', hasPermission);
//     }
//     console.log('hasPermission dentro 2: ', hasPermission);
//   }
  
//   calculateAge();
  
//   console.log('hasPermission fuera 2: ', hasPermission);

// EJEMPLO CONST

// const name = 'jose';
// let app = 'montoya';

// console.log(name, app);
// // name = 'daniel'; // Assignment to constant variable.
// app = 'gloria';

// console.log(name, app);

// let apm = '';
// apm = 'guzman';

// console.log(name, app, apm);

// const age;
// // age = 29; // Missing initializer in const declaration
// console.log(name, app, apm, age);
