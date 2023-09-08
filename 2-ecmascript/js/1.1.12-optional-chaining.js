const harryPotter = {
  name: "Harry Potter",
  species: "human",
  gender: "male",
  house: "Gryffindor",
  dateOfBirth: "31-07-1980",
  yearOfBirth: 1980,
  wizard: true,
  ancestry: "half-blood",
  eyeColour:"green",
  hairColour:"black",
  wand : {
     wood: "holly",
     core: "phoenix feather",
     length: 11
  },
  patronus: "stag",
  hogwartsStudent: true,
  hogwartsStaff: false,
  actor: "Daniel Radcliffe",
  alternate_actors: [
    { name: "chris", app: "evans", age: 38, nationality: "usa" },
    { app: "evans", age: 38, nationality: "usa" },
  ],
  alive: true,
  image: "http://hp-api.herokuapp.com/images/harry.jpg",
  /*address: {
      data: {
        street: "Private drive",
        number: "4",
      }
      country: {
        code: 'MX',
      }
  }*/

};

const name = harryPotter.name || '';
// const street = harryPotter.address.data.street || 'no tiene calle'; // Cannot read properties of undefined (reading 'street')
// const street = (harryPotter.address && harryPotter.address.street && harryPotter.address.data && harryPotter.address.data.street) || 'no tiene calle'; // OK en es5

// es6 - optional chainging
const street = harryPotter?.address?.data?.street || 'no tiene calle'; 

document.write(name);
document.write('<br/>');
document.write(street);