// Um primitivo e um dado que nao e representado atraves de um objeto e, por
// consequencia, nao possui metodo. Exemplo: String, Number, Boolean, Null, 
// Undefined, Symbol. Todos os primitivos sao imutaveis.

// A exceçao do 'null' e do 'undefined', todos os primitivos tem um objeto
// wrapper equivalente.
// O metodo 'valueOf()' do objeto wrapper retorna o valor primitivo.

// Criar uma String
const str1 = String("Brazilian Dev 1"); // typeof str1 === 'String'
const str2 = new String("Brazilian Dev 2");  // typeof str2 === 'object'

console.log(`str1 ${str1} \nstr2 ${str2}`);

console.log(`str1 dividida = ${str1.split("")} \nstr2 dividida = ${str2.split("")}`);

const str2Convertido = str2.valueOf();
console.log(typeof str2Convertido);