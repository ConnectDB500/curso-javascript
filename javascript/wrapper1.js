// Criar um numero
const num1 = Number('1');  // typeof num1 === 'number'
const num2 = new Number('2');  // typeof num2 === 'object'

console.log(`num1 ${num1} \nnum2 ${num2}`);

console.log(`num1 com duas casas decimais ${num1.toFixed(2)} \nnum2 com tres casas decimais ${num2.toFixed(3)}`);

// Criar um booleano
const bool1 = Boolean(0);
const bool2 = new Boolean('');

console.log(`bool1 ${bool1} \nbool2 ${bool2}`);

console.log(`bool1.toString() = ${bool1.toString()} \nbool2.tostring() = ${bool2.toString()}`);