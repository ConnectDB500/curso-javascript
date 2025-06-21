// Permutacao utilizando Destructuring
let a = 1;
let b = 'b';

[a, b] = Array(b, a) 

console.log(`a: ${a}`)
console.log(`b: ${b}`)


// Permutacao Simples
let c = 2;
let d = 'd';
let temp;

temp = c;   //temp == 2
c = d;      // c == 3
d = temp;   // d == 2

console.log(`c: ${c}`);
console.log(`d: ${d}`);

// Utilizando Rest Parameters
const [num1, num2, num3, ...num] = [1, 2, 3];

console.log(num1)
console.log(num2)
console.log(num3)
console.log(num)