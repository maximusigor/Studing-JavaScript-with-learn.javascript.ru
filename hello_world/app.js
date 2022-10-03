// const name = 'Ihor';
// console.log(typeof name);
// const age = 31;
//
// function getAge() {
//     return age;
// }
//
// //const output = 'Hello my name ' + name + ' and years: ' + age + ' old.';
// const output = `Hello my name ${name} and years ${getAge()} old.`;
// const output = `Hello my name ${name} and years ${age < 30 ? 'A' : 'B'} old.`;
// console.log(output);

// const name = 'Ihor';
// console.log(name.length);
// console.log(name.toLocaleUpperCase());
// console.log(name.toLowerCase());
// console.log(name.charAt(2));
// console.log(name.indexOf('or'));
// console.log(name.indexOf('hr'));
// console.log(name.startsWith('Ih'));
// console.log(name.endsWith('or!'));
// console.log(name.repeat(5));
// const string = '     password     ';
//
// console.log(string);
// console.log(string.trim());
// console.log(string.trimEnd());
// console.log(string.trimStart());

function logPerson(s, name, age) {

    if (age < 0) {
        age = 'Еще не родился!';
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`;
}

const personName = 'Ihor';
const personName1 = 'Ivan';
const personAge = 32;
const personAge1 = -10;

const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`;
const output1 = logPerson`Имя: ${personName1}, Возраст: ${personAge1}!`;

console.log(output);
console.log(output1);

