// O metodo codepointAt() retorna um numero inteiro nao negativo que e um valor do 
// ponto de codigo unicode
const icons = '9733' ; // impossivel de representar emojis no visual studio!!!

console.log(icons.codePointAt(1));

// o metodo estatico String fromCodePoint() retorna uma sequencia de caracteres
// criados usando a sequencia especifica de pontos de codigo
String.fromCodePoint(num1[, ...[, numN]])

// O metodo normalize() retorna a Forma de Normalizacao Unicode (Unicode 
// Normalization Form) de uma dada string(se o valor nao e uma string, ele sera 
// convertido para uma primeiramente)
str.normalize([form])

// O metodo localeCompare() retorna um numero que indica se uma string de 
// referencia vem antes ou depois, ou e a mesma que a string fornecida na
// ordem de classificacao.
const a = 'réservé';
const b = 'RESERVE';

console.log(a.localeCompare(b));

console.log(a.localeCompare(b, 'en', {sensitivity: 'base'}));

// O metodo toLocaleLowerCase() retorna o valor da string em minusculas, de acordo
// com quaisquer mapeamento de caixa de texto especifico da localidade.
const dotted = 'Ínstambul';

console.log(`EN-US: ${toLocaleLowerCase('en-US')}`);

console.log(`TR: ${toLocaleLowerCase('tr')}`);

// O metodo toLocaleUpperCase() retorna o valor da string em maiusculas, de acordo 
// com qualquer mapeamento de caixa de texto especifico da localidade.
const city = "Ínstambul";

console.log(city.toLocaleUpperCase('en-US'));

console.log(city.toLocaleUpperCase('TR'));