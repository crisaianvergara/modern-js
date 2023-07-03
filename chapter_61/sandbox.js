// const para = document.querySelector('p');

// show text
// console.log(para.innerText);

// override the text
// para.innerText = 'ninjas are awesome!';

// grab all p
// const paras = document.querySelectorAll('p');
// paras.forEach(para => {
//     // console.log(para.innerText);
//     // add text to para
//     para.innerText += ' new text';
// });

const content = document.querySelector('.content');
// console.log(content.innerHTML);
// override the content
// content.innerHTML = '<h2>THIS IS A NEW H2</h2>';
// add content
// content.innerHTML += '<h2>THIS IS A NEW H2</h2>';

const people = ['mario', 'luigi', 'yoshi'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});

