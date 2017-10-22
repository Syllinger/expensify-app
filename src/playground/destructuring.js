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