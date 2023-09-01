// array: listas
// objetos: buscamos asociar datos referentes a una misma entidad

//fruits = [
    // ['apple', 22, true, spring ], // fruits[0][0]
    // { name: 'apple', price: 22, isStock: true, temporada: spring }, // friuts[0].name
//]

const fruits = [
    { name: 'apple', price: 22, isStock: true, temporada: 'spring', stores: ['buelmer', 'badiga eurrira', 'chadreui'] },
    { name: 'mangoo', price: 32, isStock: false, temporada: 'summer', stores: ['buelmer', 'chadreui'] },
    { name: 'strawberry', price: 50, isStock: true, temporada: 'spring', stores: [ 'buelmer'] },
    { name: 'grape', price: 20, isStock: true, temporada: 'spring', stores: ['badiga eurrira', 'chadreui'] },
];

// ES5: FOR
for (let i=0; i<fruits.length; i++) {
    const fruit = fruits[i]; // iterador
    // Mostrar el mensaje "La NAME cuesta PRICE y SI/NO esta en stock"
    const message = fruit.isStock ? 'si' : 'no' // operador ternario
    console.log(`La ${fruit.name} cuesta ${fruit.price} y ${message} esta en stock`);
}

// ES6: FOR OF
for (let fruit of fruits) {
    // Mostrar el mensaje "La NAME cuesta PRICE y SI/NO esta en stock"
    const message = fruit.isStock ? 'si' : 'no' // operador ternario
    console.log(`La ${fruit.name} cuesta ${fruit.price} y ${message} esta en stock`);
}

// ES6: FOR IN
// Mostrar el mensaje "La NAME cuesta PRICE y SI/NO esta en stock y lo venden en TIENDA1, TIENDA2, ... TIENDAN"
for (let fruit of fruits) {
    // Mostrar el mensaje "La NAME cuesta PRICE y SI/NO esta en stock y lo venden en TIENDA1, TIENDA2, ... TIENDAN"
    const message = fruit.isStock ? 'si' : 'no' // operador ternario
    let storesMessage = '';
    for (let prop in fruit) {
      if (prop === 'stores') {
         // console.log(fruit[prop]); // stores: ['buelmer', 'badiga eurrira', 'chadreui'] => 'buelmer', 'badiga eurrira', 'chadreui'
         for (let store of fruit[prop]) {
           storesMessage += `${store}`;
           //  storesMessage += fruit[prop].length - 1 === i ? '.' : ',' como obtener la i?????
         }
      }
    }
    console.log(`La ${fruit.name} cuesta ${fruit.price} y ${message} esta en stock y lo venden en ${storesMessage}`);

// programacion imperativa
// programacion declarativa