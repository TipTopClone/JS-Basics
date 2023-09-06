//single line comment

/*Multi 
line 
comment */

// console.log("how are you");

// alert("hello there, how ya doing?")

// ==========variables=========

// var, let, const

// var firstName; //creating variable

// var firstName = "Sujan"; //assining value
// let lastName = "Mahat";
// const dob = "08-11-1998";

// console.log(firstName);
// console.log(lastName);
// console.log(dob);

// firstName = "Sam";
// lastName = "Smith";
// dob = "30-03-1999";

// console.log(firstName, lastName, dob);

// ========JS-Operator===========

// +	Addition
// console.log(5 + 5);

// let a = 5;
// const b = 3;
// const result = a + b;

// -	Subtraction
// const result = a - b;

// *	Multiplication
// const result = a * b;

// **	Exponentiation (ES2016)
// const result = a ** b;

// /	Division
// const result = a / b;

// %	Modulus (Division Remainder)
// const result = a % b;

// ++	Increment
// console.log(a++);
// console.log(++a);
// a++;
// a++;

// --	Decrement
// console.log(a--);
// a--;
// a--;

// console.log(a);

// ======comaprison======
// ==

// ===
// >, >=
// <, <=

// conditional statements
// If
// let age = 28;
// if (age >= 18) {
//   console.log("welcome to party");
// }

// If else
// Else if

// const pet = "cow";
// if (pet === "cow") {
//   console.log("Moo-Moo");
// } else if (pet === "cat") {
//   console.log("meoww");
// } else {
//   console.log("Not an animal.");
// }

// Switch
// const pet = "cow";
// switch (pet) {
//   case "cat":
//     console.log("meoww");
//     break;
//   case "cow":
//     console.log("Moo-Moo");
//     break;
//   default:
//     console.log("Not an animal");
// }

// Error handeling

// try{
// //code
// console.log("first");
// }
// catch(error){
//     //what you want to do when there is an error
//     console.log(error.message);
// }
// finally {
//     //this code will always run
//     console.log("This code was executed at" + Date.now());
// }

// try {
//   //code
//   console.log("first");
//   throw new Error("hacked");
// } catch (error) {
//   //what you want to do when there is an error
//   console.log(error.message);

//   if (error.message === "hacked") {
//     console.log("email all team members");
//   }
// }

/////Scheduling

//setTimeout

// setTimeout(() => {
//   console.log("I am a setTimeout");
// }, 3000); //3s
// //=>clearTimeout

// //setInterval
// let i = 0
//  const counter = setInterval (()=> {
// console.log("It is " + i++);

// if (i === 10) {
//     clearInterval(counter);
//     console.log("It stopped");
// }
// }, 1000);  //1s

// => clearInterval

// JS - ES6

// Let, Const

// Template literals
// const a = 7;
// const b = 6;
// console.log(a + b);
// console.log(
//   " When we add " + a + " and " + b + " the total would be " + (a + b)
// );
// const str = `
//  when we add ${a} and ${b} the total would be ${a + b}`;
// console.log(str);

// Arrow function
// function add(a, b) {
//   console.log("from add function" , a, b);
// }

// function add(a, b) {
//   const total = a + b;
//   return total;
// }

// const add = (a, b) => {
//     const total = a + b;
//     return total;
//   }

// const add = (a, b) => {
//   return a + b;
// };

// const add = (a, b) => a + b;

// const ans = add(4324556, 234455);
// const ans2 = add(44, 55);
// const ans3 = add(56, 5);

// console.log(ans, ans2, ans3);

// Destructuring
// Default + Rest + Spread

//Loops
// for(i = 0; i < cars.length; i++)
// for (initial, condition, inc/dec){

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// for/in for (x in person) → for object
// for /of for (x of cars) → for array

// while (condition)
// let i = 0;
// while (i < 10){
//     console.log(i);
//     i++;
// }

// do/while | do{}while()
// let i = 10;
// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// Break out of loop
// let i = 0;
// while (i < 10) {
//   console.log(i);

//   if (i === 5) {
//     break;
//   }
//   i++;
// }

// Continue, in loop to exit 1 loop
// let i = 0;
// while (i < 10) {
//   i++;

//   if (i === 5) {
//     continue;
//   }
//   console.log(i);
// }

// let i = 0;
// while (i < 10) {
//   i++;

//   if (i % 2 === 0) {
//     console.log(i);
//     // continue;
//   }

//   console.log("extra 50 lines of code")
// }

// Break, break out the loop or switch

// JS- Data manipulation

//Number

//safe number  -2^53-1 to 2^53-1

//downcasting
// const num = "0424249946";
// // const val = +num;
// const val = Number(num);

// const num = "042424.9946s";
// // const val = parseInt(num);
// const val = parseFloat(num);

// console.log(typeof val, isNaN(val));

// const str = "hi I'm Sujan Mahat";
// const str = ` Hi there My name is Sujan Mahat, and I live in sydney`;

// const val = str.length;

// const val = str.toLowerCase();
// const val = str.toUpperCase();

// const val = str[0];
// const val = str.indexOf("e");
// const val = str.lastIndexOf("e");

// const val = str.replace("i", "Y");
// const val = str.replaceAll("i", "Y");

// const val = str.substring(0, 3);
// const val = str.substring(3);

// const val = str.slice(3, 6);
// const val = str.slice(-1);

// const val = str.includes("sujan");

// const val = str.search("Sujan");

// const val = str.charAt(3);
// const val = str.charCodeAt(3);

// const val = str.split(",");
// const val = str.trim();

// console.log(str.length);
// console.log(val.length);

// 3. Array[]
// Length, push , pop, shift, unshift, toString, join,[], splice, slice, indexOf
// Short, reverse
// forEach, map
// Filter, reduce, every

// const vals = ["Sujan", 654, true, null, undefined, NaN, [234, 456], {}];

// const fruits = ["banana", "apple", "orange", "mango"];
// console.log(fruits[2]);

// fruits.push("mango");
// fruits.unshift("mango");

// const dt = fruits.pop();
// const dt = fruits.shift();

// const dt = fruits.slice(1, 3);

// const dt = fruits.splice(1, 0, "potato");

// console.log(dt);
// console.log(fruits.sort());

// console.log(fruits.reverse());

// const num = [23, 45, 45, 12, 89, 3, 7];
// console.log(num.sort((a, b) => a - b));

// const fruits = ["banana", "apple", "orange", "mango"];

// console.log(fruits.toString());
// const dt = fruits.join("|");
// console.log(dt);

//Array loops

// fruits.forEach((itm, i) => {
//   console.log(itm + " is yummy.", i);
// });

// const newArg = fruits.map((item, index) => {
//   console.log(item, index);
//   return "SKU-" + item.toUpperCase();
// });

// const newArg = fruits.filter((f) => {
//   return !f.includes("e");
// });

// const result = fruits.every((item) => item.includes("e"));

// console.log(result);

// const money = [34422, 34455, 55666, 67766];
// const total = money.reduce((subTtl, item) => {
//   return subTtl + item;
// }, 0);

// console.log(total);

// const arg = Array(100).fill("❤️");
// console.log(arg);

//challange 1
// 1. create an array of 50 random numbers programmatically range between 1 and 100

// var arr = [];
// while (arr.length < 50) {
//   var r = Math.floor(Math.random() * 100) + 1;
//   arr.push(r);
// }
// console.log(arr);

//2. sort the array in descending order

// console.log(arr.sort((a, b) => b - a));

//3. get total of the array

// const total = arr.reduce((subTtl, item) => {
//   return subTtl + item;
// }, 0);

// console.log(total);

//4. divide original array into 2 new arrays that contains even or odd numbers only

// const even = arr.filter((number) => {
//   return number % 2 === 0;
// });

// console.log(even);

// const odds = arr.filter((number) => {
//   return number % 2 !== 0;
// });

// console.log(odds);

//5.remove duplicate number for the original array
// const uniqueArg = arr.filter((item, i) => i === arr.indexOf(item));
// console.log(uniqueArg);

// Fun challange
// debugger;
/*
const yoyo = () => console.log(5 + 6);
console.log('1. log');
setTimeout(() => {
  console.log('2. Inside frist set timeout');
}, 500);
console.log('3. after first setTime out');
const sayHey = () => {
  console.log('4. inside sayhey');
  yoyo();
};
setTimeout(() => {
  console.log('5. inside second set timeout');
}, 0);
sayHey();
console.log('6. last clg');
*/

//

//create unique array of 50 numbers ranging from 1 to 100
// const arr = [];
// while (arr.length < 50) {
//   const num = Math.floor(Math.random() * 100) + 1;
//   if (arr.indexOf(num) === -1) arr.push(num);
// }
// console.log(arr);

//sirs way of doing
/*
console.time('arr');
const arr = [];
let counter = 0;
while (arr.length < 50) {
  const num = Math.floor(Math.random() * 100) + 1;
  if (!arr.includes(num)) {
    arr.push(num);
  }
  counter++;
}
console.log(arr.sort());
console.log(counter);
console.timeEnd('arr');
*/

//Object
const person = {
  name: 'Sujan Mahat',
  number: 61424249946,
  add: 'Sydney',
  lazy: false,
  skills: ['JS', 'React', 'node'],
  parents: {
    f: 'Kumar',
    m: 'Devaki',
  },
};

// console.log(person);
// console.log(person.name);
// console.log(person['number']);

// const num = person['number'];
// person.number = '00000000';
// const num = person.number;

// console.log(num);

// console.log(person.skills[1]);

// person.gender = 'NA';

// console.log(person);

// for (let key in person) {
//   console.log(key); //to get the varaibale
//   console.log(person[key]); //to get the value
// }

//convert object into array

// const p = Object.keys(person);
// const p = Object.values(person);
// const p = Object.entries(person);

// console.log(p);

//Destructing
// console.log(person);
// const { name, add, ss } = person;

// console.log(name, add, ss);

// const bio = ({ name, add = 'na' }) => {
//   //   const { name, add } = obj;
//   const str = `Hi there. My name is ${name} and I live in ${add}`;
//   return str;
// };

// const p1 = {
//   name: 'Sujan',
//   add: 'Sydney',
// };

// const data = bio(p1);
// console.log(data);

// const p2 = {
//   name: 'asim',
// };

// const sd = bio(p2);
// console.log(sd);

//Default + Rest + Speed

// const p = {
//   name: 'sujan',
//   add: 'sydney',
// };

// const career = {
//   education: 'MSCS',
//   year: 2012,
// };

// const samObj = Object.assign({}, p, career);
// p.name = 'Asim';
// const samObj = {
//   ...p,
//   ...career,
// };

// const { name, ...rest } = samObj;
// console.log(samObj, name, rest);

// OR to understand top code
// const a = ['p', 24, true];
// const b = ['q', 'dd', false];

// const combo = [...a, ...b];

// ======== Dates==========

// const today = Date();
// const today = Date.now();
// const today = new Date();
// const today = new Date('2023-8-29');

// const data = today.toLocaleDateString();

// const data = today.getDay();
// const data = today.getFullYear();
// const data = today.getMonth();
// const data = today.getMinutes();
// console.log(data);

// today.setDate(today.getDate() + 5);
// console.log(today);

// console.log(typeof today, today);

//Challenge #1:
//create a function that takes foods and the expiry date and returns one of the followings:
//1. if expired: AB is expired 4 days ago

// const aDay = 1000 * 60 * 60 * 24;
// const checkExp = ({ name, exp }) => {
//   const today = Date.now();
//   const expt = new Date(exp).getTime();

//   const diffDay = Math.floor((expt - today) / aDay);

//   if (diffDay < 1) {
//     return ` ${name} has expired ${Math.abs(diffDay)} days ago`;
//   } else {
//     return `${name} will be usable for another ${diffDay} `;
//   }
// };
//2. Create one fuction which checks the data return message like above

// const foods = [
//   {
//     name: "tuna",
//     exp: "2023-10-15",
//   },
//   {
//     name: "mile",
//     exp: "2023-8-15",
//   },
// ];

// foods.map((food) => {
//   console.log(food);
//   // console.log(checkExp(food))});
// });

// Covering Numbers
// An n-digit number is considered a "covering number" if it makes use of all the digits 1 to n exactly once, where n is the number of nonzero digits. For example, 2143 and 103245 are both "covering numbers", while 20010042 and 113245 are not.
// Write a function that takes a single integer, and returns a value according to the following rules:
// • If the number is a "covering number", return the number of zeroes as a positive integer. For example, 2143 would produce a result of *0*, while 103245 would produce a result of "1*.
// • If the number is not a 'covering number", return *-1'.
// Examples
// Input: 1423
// Output: 0
// Input: 12346500
// Output: 2
// Input: 123465001
// Output: -1
// powered by Google
// Browse Resources
// Search for any help or documentation you

function CoveringNumbers(num) {
  // code goes here return num;
  const str = num.toString();
  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === '0') {
      counter++;
    }

    if (char !== '0' && i !== str.indexOf(char)) {
      return -1;
    }
  }

  return counter;
}
// keep this function call here
console.log(CoveringNumbers(3405603));
