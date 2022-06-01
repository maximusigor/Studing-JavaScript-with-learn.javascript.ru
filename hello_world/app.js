// Number
let num = 42; // integer
let float = 42.42; // float
let pow = 10e3;
console.log(num);
console.log(float);
console.log(pow);
console.log(Math.pow(2, 53) - 1);
console.log('MAX_SAFE_INTEGER:', Number.MAX_SAFE_INTEGER);
console.log('MIN_SAFE_INTEGER:', Number.MIN_SAFE_INTEGER);
console.log('MAX_VALUE:', Number.MAX_VALUE);
console.log('MIN_VALUE:', Number.MIN_VALUE);
console.log('POSITIVE_INFINITY:', Number.POSITIVE_INFINITY);
console.log('NEGATIVE_INFINITY:', Number.NEGATIVE_INFINITY);
console.log(Number.NaN);
let weird = 2 / undefined;
console.log(Number.isNaN(weird));
console.log(Number.isNaN(42));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(42));


let stringInt = '42';
let stringFloat = '42.42';
console.log(stringInt + 2);
console.log(Number(stringInt) + 2);
console.log(+stringInt + 2);
console.log(Number.parseInt(stringInt) + 2);
console.log(stringFloat + 2);
console.log(Number.parseFloat(stringFloat) + 2);