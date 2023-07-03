// // function expression
// // store function in a variable
// const speak = function() {
//     console.log("Good day!");
// };

// // hoisting works here
// greet();
// // hoisting not works here
// speak();

// // function declaration
// // hoisting work
// function greet() {
//     console.log("Hello there!");
// }


// arguments & parameters
// const speak = function(name1 = "Luigi", time="night") {
//     console.log(`Good ${time}, ${name1}.`);
// };

// speak("Shaun");

// returning values
// const calcArea = function(radius) {
//     let area = 3.14 * radius**2;
//     return area
// };

// const area = calcArea(5);
// console.log("area is:", area);

// regular function
// const calcArea = function(radius) {
//     let area = 3.14 * radius**2;
//     return area
// };

// arrow function
// const calcArea = radius => 3.14 * radius**2;

// const calcArea = radius => {
//     return 3.14 * radius**2;
// };

// const calcArea = (radius) => {
//     return 3.14 * radius**2;
// };

// const area = calcArea(5);
// console.log("area is:", area);

// Practice
// const greet = () => "Hello, world!";
// const result = greet();
// console.log(result);

// const bill = (products, tax) => {
//     let total = 0;
//     for(let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// };

// console.log(bill([10, 15, 30], 0.2));

// const name1 = "Shaun";

// // functions
// const greet = () => "hello";

// let resultOne = greet();
// console.log(resultOne);

// // methods
// let resultTwo = name1.toLocaleUpperCase();
// console.log(resultTwo);

// callbacks & foreach
// const myFunc = (callBackFunc) => {
//     let value = 50;
//     callBackFunc(value);
// };


// myFunc(value => {
//     console.log(value);
// });

// let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li']

// Regular Function
// people.forEach(function(person) {
//     console.log(person)
// });

// const logPerson = (person, index) => {
//     console.log(`${index} - hello ${person}!`);
// };

// Arrow Function
// people.forEach((person, index) => {
//     console.log(index, person);
// });

// people.forEach(logPerson);

const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li']

let html = ``;

people.forEach(person => {
    html += `<li style="color: purple">${person}</li>`
});

console.log(html);
ul.innerHTML = html;


