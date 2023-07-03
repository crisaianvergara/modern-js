// object literals

// const blogs = [
//     {
//         title: "why mac & cheese rules",
//         likes: 30,
//     },
//     {
//         title: "10 things to make with marmite",
//         likes: 50,
//     }
// ];

// console.log(blogs);

// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'crystal@gmail.com',
//     location: 'berlin',
//     blogs: [
//         {
//             title: "why mac & cheese rules",
//             likes: 30,
//         },
//         {
//             title: "10 things to make with marmite",
//             likes: 50,
//         }
//     ],
//     login() {
//         console.log('the user logged in');
//     },
//     logout() {
//         console.log('the user logged out');
//     },
//     logBlogs() {
//         // this keyword
//         // console.log(this.blogs);
//         console.log("This user has written the following blogs:");
//         this.blogs.forEach(blog => {
//             console.log(blog.title, blog.likes);
//         });
//     },
// };

// user.age = 35;
// user["age"] = 45;
// const key = 'location'
// console.log(user[key]);
// console.log(user.age);
// console.log(user["name"]);
// console.log(user["email"]);
// console.log(typeof user)

// methods
// user.login();
// user.logout();

// user.logBlogs();
// console.log(this)

// Math object
// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);


// const area = 7.7;
// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area)); // leave the decimal point

// // random numbers
// const random = Math.random();
// console.log(random);
// console.log(Math.round(random * 100));


// primitive values
// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// scoreOne = 100;
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// reference values
const userOne = {
    name: 'ryu',
    age: 30,
};
const userTwo = userOne;

console.log(userOne, userTwo);


userOne.age = 40;
console.log(userOne, userTwo);
