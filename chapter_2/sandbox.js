// for loops
// for(let i = 0; i < 5; i++) {
//     console.log('in loop: ', i);
// }
// console.log('loop finished');


// const names = ['shaun', 'mario', 'luigi'];

// for(let i = 0; i < names.length; i++) {
//     // console.log('name: ', names[i]);
//     let html = `<div>${names[i]}</div>`
//     console.log(html);
// }
// console.log('loop finished');

// while loops
// const names = ['shaun', 'mario', 'luigi'];

// let i = 0;

// while (i < 5) {
//     console.log('in loop', i);
//     i++;
// }

// while(i < names.length) {
//     console.log(names[i]);
//     i++;
// }

// do while loops
// let i = 0;
// do {
//     console.log('val of i is: ', i);
//     i++;
// } while (i < 5);

// if statements
// const age = 21;
// if(age > 20) {
//     console.log('You are over 20 years old');
// };

// const names = ['shaun', 'ryu', 'chun-li', 'yoshi'];

// if (names.length > 3) {
//     console.log("That's a lot of ninjas");
// }

// const password = 'password';

// if (password.length >= 8) {
//     console.log("That password is long enough");
// };

// else if statements
// const password = 'passworasfsafgfafasfasf';

// if (password.length >= 12) {
//     console.log("That password is mighty strong");
// } else if (password.length >= 8) {
//     console.log("That password is long enough");
// } else {
//     console.log("That password is not long enough");
// }

// logical operators - OR || and AND &&
// const password = 'password';

// if (password.length >= 12 && password.includes("@")) {
//     console.log("That password is mighty strong");
// } else if (password.length >= 8 || password.includes("@") && password.length > 5) {
//     console.log("That password is strong enough");
// } else {
//     console.log("That password is not long enough");
// }

// logical NOT (!)
// let user = false;

// if(!user) {
//     console.log("Hello");
// }
// console.log(!true);
// console.log(!false);

// break and continue
// const scores = [50, 25, 0, 30, 100, 20, 10];

// for (let i = 0; i < scores.length; i++) {

//     if(scores[i] === 0) {
//         continue;
//     }

//     console.log('your score: ' + scores[i]);

//     if(scores[i] === 100) {
//         console.log("Congrats, you got the top score!")
//         break;
//     }
// }

// switch statements
// const grade = 'D';

// switch (grade) {
//     case 'A':
//         console.log('You got an A!');
//         break;
//     case 'B':
//         console.log('You got B!');
//         break;
//     case 'C':
//         console.log('You got C!');
//         break;
//     case 'D':
//         console.log('You got D!');
//         break;
//     case 'E':
//         console.log('You got an E!');
//         break;
//     default:
//         console.log('Not a valid grade!');
// }

// using if statements
// if(grade === 'A') {

// } else if(grade === 'B') {

// } else if(grade === 'C') {
    
// } else if(grade === 'D') {
    
// } else if(grade === 'E') {
    
// }


// variables & block scope
// let age = 30;

// if(true) {
//     let age = 40;
//     let name1 = 'shaun';
//     console.log('inside 1st code block', age, name1);

//     if(true) {
//         let age = 50;
//         console.log('inside 2nd code block', age);
//     }
// }

// console.log('outside code block', age);

const age = 30;

if(true) {
    const age = 40;
    const name1 = 'shaun';
    console.log('inside 1st code block', age, name1);

    if(true) {
        const age = 50;
        console.log('inside 2nd code block', age);
        var tes = 'hello world';
    }
}

console.log('outside code block', age, test);