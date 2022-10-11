// 1 Functions

//Function Declaration
function greet(name) {
    console.log('Привет - ', name, '!');
}

//Function Expression
const greet2 = function greet2(name) {
    console.log('Привет 2 - ', name, '!');
}

greet('Magdalena');
greet2('Magdalena');

console.log(typeof greet);
console.dir(greet);

// 2 Anonimous functions
// let counter = 0;
// const interval = setInterval(function() {
//     if (counter === 5){
//         clearInterval(interval);
//     }else {
//         console.log(++counter);
//     }
// }, 1000);

// 3 Arrow functions
function greet(name) {
    console.log('Привет - ', name, '!');
}

const arrow = (name) => {
    console.log('Привет - ', name, '!')
}
arrow('Ihor');

const arrow2 = name => console.log('Привет - ', name, '!');

arrow2('Vlad');

// const pow2 = num => {
//     return num ** 2
// }

const pow2 = num => num ** 2;

console.log(pow2(5));

// 4 Default parameters

const sum = (a, b) => a + b;

console.log(sum(4,5));