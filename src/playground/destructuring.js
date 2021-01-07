// Object Destructuring


// const person = {
//     name: 'Nikolaos',
//     age: 44,
//     location: {
//         city: 'Zeist',
//         temp: 49
//     }
// };

// const {name: firstName = 'Undefined', age } = person;

// console.log(`${firstName} is ${age}.`);

// const {city, temp: temperature} = person.location;
// if (city && temperature) {
//     console.log(`It 's ${temperature} temp in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Nikos Zoump',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: firstName = 'Self-Published' , age } = book.publisher;
// if (firstName) {
//     console.log(`Het name is ${firstName}.`);
// };

// Array Destructuring

// const address = ['1299 graff adolflaan', 'Utrecht', 'Nederland', '37008XA'];
// const [, city, state = 'New York', code] = address;
// console.log(`You are in  ${city} ${state}.`)

const item = ['Coffee(hot)', '$2.00','$2.50', '$2.75'];
const [ sort, small, medium, large] = item;
console.log(`A medium ${sort} costs ${medium}.`);
