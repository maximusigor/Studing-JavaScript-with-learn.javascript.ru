//Arrays

const cars = ['Mazda', 'Ford', 'BMW', 'Mercedes'];
const fib = [1, 1, 2, 3, 5, 8, 13, 21];

console.log(cars);

//Function
function addItemToEnd() {

}
//Method
cars.push('Porshe'); // add new item to end array;
console.log(cars);

cars.unshift('Skoda'); //add new item to start array;
console.log(cars);

// cars.shift(); // delete first item of array and return.
// console.log(cars);
//
// const firstItem = cars.shift();
// console.log(firstItem);
//
// cars.pop();// delete last item of array and return.
// console.log(cars);
//
// const lasttItem = cars.pop();
// console.log(lasttItem);

cars.reverse(); //reverse array.
console.log(cars);

// Task 1
// const text = 'Hello, we study JavaScript';
// const reverseText = text.split('').reverse().join('');
// console.log(reverseText);

// Task 2

const index = cars.indexOf('BMW');

console.log(cars[index]);

cars[index] = 'Reno';
console.log(cars);