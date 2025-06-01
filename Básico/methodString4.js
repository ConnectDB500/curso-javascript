// Metodos de ações
let stringTransformada;
const umaString = " Essa e uma string de teste do canal brazilian dev! ";

stringTransformada = umaString.repeat(3);
console.log(stringTransformada);
stringTransformada = umaString.concat(', aqui uma outra string qualquer');
console.log(stringTransformada);
stringTransformada = umaString.replace("Essa", "Isto");
console.log(stringTransformada);
stringTransformada = umaString.slice(0, 15);
console.log(stringTransformada);
stringTransformada = umaString.split(" ");
console.log(stringTransformada);
stringTransformada = umaString.split(" ").map(valor => valor + "_abc").join("  ");
console.log(stringTransformada);
stringTransformada = umaString.substring(0, 5);
console.log(stringTransformada);
stringTransformada = umaString.toLocaleLowerCase();
console.log(stringTransformada);
stringTransformada = umaString.toLocaleUpperCase();
console.log(stringTransformada);
stringTransformada = umaString.trim();
console.log(stringTransformada);
stringTransformada = umaString.trimStart();
console.log(stringTransformada);
stringTransformada = umaString.trimEnd();
console.log(stringTransformada);


