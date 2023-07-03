// const para = document.querySelector('p');
// const para = document.querySelector('div.error');

// Can use for each on Node list
// const paras = document.querySelectorAll('p');
// console.log(paras);

// paras.forEach(para => {
//     console.log(para);
// });

// const errors = document.querySelectorAll('.error');

// console.log(errors);

// get an element by ID
// const title = document.getElementById('page-title');
// console.log(title);

// get elements by their class name
// Can't use for each on HTML collection
// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);

// get elements by their tag name
// Can't use for each on HTML collection
const paras = document.getElementsByTagName('p');
console.log(paras);
console.log(paras[1]);
