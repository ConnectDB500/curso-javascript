// O metodo matchAll() retorna um iterator de todos os resultados correspondentes 
// uma string em relacao a uma expressao regular, incluindo grupos de captura
const regexp = /t(e)(st(\d?))/g
const str = 'test 1 test 2';

const array = [...str.matchAll(regexp)];

console.log(array[0]);

console.log(array[1]);

// Metodo de comparacao e verificacao
const stringTeste = "Essa e uma string de teste do canal brazilian dev!";

console.log(stringTeste.startsWith("Essa")); //true
console.log(stringTeste.endsWith("uma", 9)); //false
console.log(stringTeste.includes("brazilian dev")); //true
console.log(stringTeste.indexOf("e")); //5
console.log(stringTeste.lastIndexOf("!")); //49
console.log(stringTeste.valueOf()); //Essa e uma string de teste do canal brazilian dev!
console.log(String.fromCharCode(69)); //E
