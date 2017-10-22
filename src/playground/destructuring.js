/* OBJECT DESTRUCTURING */

const person = {
  name: 'Mark',
  currentAge: 33,
  location: {
    city: 'Toronto',
    temp: 23
  }
};

/*
How we would map properties to variables in ES5
*/
// const name = person.name;
// const age = person.age;

/* 
Demonstrating destructuring with default value and default 
value with renamed property (in the case of "age").
*/
const {name = 'Anonymous', currentAge: age = 18} = person;
console.log(`${name} is ${age}.`);

/*
Demonstrating how to rename a property when using object 
destructuring.
*/
const {city, temp: temperature} = person.location;
if (city && temperature) {
  console.log (`It's ${temperature} in ${city}.`);
}

/* ARRAY DESTRUCTURING */

const address = ['121 Queen Street E', 'Toronto', 'Ontario', 'M9W 6N0'];

/*
Include a comma as a placeholder for a value that you do not 
need to extract from the array.
*/
const [, municipality = 'Toronto', province] = address;

console.log(`You are in ${municipality} ${province}.`);