const fruits = [
    { name: 'apple', price: 22, isStock: true, temporada: 'spring' },
    { name: 'mangoo', price: 32, isStock: false, temporada: 'summer' },
    { name: 'strawberry', price: 50, isStock: true, temporada: 'spring' },
    { name: 'grape', price: 20, isStock: true, temporada: 'summer' },
];

console.log('==== FOR_EACH ====');
const forEachExample = fruits.forEach(function(fruit, index) {
  // console.log('index', index);
  console.log('fruit', fruit);
  
  if (fruit.temporada === 'summer') {
    return fruit;
  }
  
});
console.log('forEachExample: ', forEachExample);

console.log('==== MAP ====');
const mapExample = fruits.map(function(fruit, index) {
  // console.log('index', index);
  console.log('fruit', fruit);
  
  if (fruit.temporada === 'summer') {
    return fruit;
  }

});
console.log('mapExample', mapExample);

