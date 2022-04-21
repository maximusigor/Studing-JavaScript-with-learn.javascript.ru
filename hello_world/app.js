// 1 Variables


// CamelCase
//const firstName = 'Ihor';
//const lastName = 'Shylov'; // string
//const age = 31; // number
// const isProgrammer = true; // boolean
//
// const _ = 'private';
// const $ = 'some value';

// const if = 'err'; // error
// const 5withNum = 5; // error
//const withNum5 = '5';

// 2 Mutation


//console.log('Name: ' + firstName + ', age: ' + age);
//alert('Name: ' + firstName + ', age: ' + age);
//console.log(age);
//alert(age);
//const lastName = prompt('Enter your last name please');
//alert(firstName + ' ' + lastName);

// 3 Operators

// const currentYear = 2022;
// const birthYear = 1990;
// const age = currentYear - birthYear;
// //alert(age);
//
// let a = 10;
// let b = 5;
// let money = 30000;
//
// let c = 32;
//c = c + a;
//c = c - a;
//c = c * a;
//c = c / a;
// c += a;
// c -= a;
// c *= a;
// c /= a;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
//
// console.log(++money);
// console.log(--money);
//
// console.log(c);


// 4 Data types

// let name = 'Ihor';
// let age = 31;
// let isProgrammer = true;
// let x
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isProgrammer);
// console.log(typeof x);
// console.log(typeof null);


// 5 Priority of operators


const fullAge = 31;
const birthYear = 1990;
const currentYear = 2022;

// + - = >= <=
// let isFullAge = currentYear - birthYear >= fullAge;
// console.log(isFullAge);

// 6 Сonditional operators

//let courseStatus = 'pendin'; // ready, pending, fail

//if (courseStatus === 'ready') {
// console.log('The course is ready and can be taken ');
//} else if (courseStatus === 'pending') {
//    console.log('The course is under development');
//} else {
//    console.log('The course failed');
//}

// let num1 = 42;
// let num2 = '42';
//
// if (num1 == num2) {
//     console.log('true');
// } else if (num1 === num2) {
//     console.log('false');
// }

//let isReady = true;
//let isReady = false;

// if (isReady) {
//     console.log('Good');
// } else {
//     console.log ('Bad');
// }

// Ternary expression
//isReady ? console.log('Good') : console.log ('Bad');

// 7 Boolean logic

// let a1 =  true && true;     // t && t return true
// let a2 =  true && false;    // t && f return false
// let a3 = false && true;     // f && t return false
// let a4 = false && (3 == 4); // f && f return false
// let a5 = "Cat" && "Dog";    // t && t return Dog
// let a6 = false && "Cat";    // f && t return false
// let a7 = "Cat" && false;    // t && f return false

// let o1 =  true || true;     // t || t return true
// let o2 = false || true;     // f || t return true
// let o3 =  true || false;    // t || f return true
// let o4 = false || (3 == 4); // f || f return false
// let o5 = "Cat" || "Dog";    // t || t return Cat
// let o6 = false || "Cat";    // f || t return Cat
// let o7 = "Cat" || false;    // t || f return Cat


// 8 Function

// function calculateYear(year){
//     return 2022 - year;
// }

// console.log(calculateYear(1990));
// console.log(calculateYear(1996));
// console.log(calculateYear(1999));

// function logInfoAbout (name, year){
//     let age = calculateYear(year);
//     if (age > 0){
//         console.log('Man name ' + name + ' have age ' + age);
//     } else {
//         console.log('Its future');
//     }

// }
//
// logInfoAbout('Ihor', 1990);
// logInfoAbout('Ihor', 2023);

// 9 Arrays

//let cars = ['Mazda', 'Mercedes', 'Ford'];
// console.log(cars);

//let cars = new Array('Mazda', 'Mercedes', 'Ford');
//console.log(cars);
// console.log(cars[0]);
// console.log(cars[1]);
// console.log(cars[2]);
// console.log(cars[3]);
// console.log(cars.length);
//
// cars[0] = 'Porsche';
// console.log(cars);
// cars[5] = 'Ferrari';
// console.log(cars);

// 10 Cycles

let cars = ['Mazda', 'Mercedes', 'Ford'];