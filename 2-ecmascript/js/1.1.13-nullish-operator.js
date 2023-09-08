const harryPotter = {
    name: 'harry potter',
    species: "human",
    gender: "male"
};

// ternario
const hasName = harryPotter.name ? 'si tiene nombre' : 'no tiene nombre' // if else
console.log('hasName', hasName);

// nullish
const hasName1 = harryPotter.name ?? 'no tiene nombre' // if
console.log('hasName1', hasName1);