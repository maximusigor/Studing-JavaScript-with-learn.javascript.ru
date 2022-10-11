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
// function greet(name) {
//     console.log('Привет - ', name, '!');
// }

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

const sum = (a= 40, b = a * 2) => a + b;

console.log(sum(4,5));
console.log(sum());

function sumAll(...all) {
    let result = 0;
    for (let num of all) {
        result += num
    }
    return result;
}

const res = sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(res);

//Closures
function createMember(name) {
    return function(lastName) {
        console.log(name + lastName);
    }
}

const logWithLastName = createMember('Ihor');
console.log(logWithLastName());
console.log(logWithLastName('Shylov'));
console.log(logWithLastName('Ivanov'));
