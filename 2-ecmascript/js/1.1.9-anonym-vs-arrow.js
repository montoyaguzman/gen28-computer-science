const array = [3, 5, 6, 8];

const res = array.find(function(iterator, index) {
  return iterator % 2 === 0;
});
console.log('res', res);

const res2 = array.find((iterator, index) => {
  return iterator % 2 === 0;
});
console.log('res2', res2);

const res3 = array.find((iterator, index) => iterator % 2 === 0);
console.log('res3', res3);

const res4 = array.find(iterator => iterator % 2 === 0);
console.log('res4', res4);