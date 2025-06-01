// Metodos de comparacao e verificacao: match(), search(), matchall()

String.prototype.match();  // retorna array

// Um objeto de expressao regular. Se regexp nao for uma RegExp, o mesmo sera 
// convertido para uma nova RegExp usando new RegExp(regexp).

// Se voce nao fornecer nenhum parametro ao usar o metodo match(), voce obtera
// um array com uma string vazia: [""].

const str = "Para maiores informacoes, veja o Capitulo 3.4.5"
const re = /(capitulo \d+(\.\d))/i;
const found = str.match(re);
console.log(found);

const str1 = "Nan significa 'not a number'. Infinity contem -Infinity e +Infinity",
      str2 = "Meu avo tem 65 anos e minha avo 63", 
      str3 = "O contrato foi declarado null (nulo) e void(sem efeito)";

str1.match("numero"); // ["numero"]
str1.match("NaN"); // ["NaN"]
str1.match(+Infinity); // ["Infinity"]
str1.match(-Infinity); // ["-Infinity"]
str2.match(65); // [65]
str2.match(+65); // [65]
str3.match(null); //["null"]


String.prototype.search();  // retorna array

// Um objeto de expressao regular. Se regexp nao for uma RegExp, o mesmo sera 
// convertido para uma nova RegExp usando new RegExp(regexp).

// Se voce nao fornecer nenhum parametro ao usar o metodo match(), voce obtera
// um array com uma string vazia: [""].

const string1 = "NaN significa 'not a number'. Infinity contem -Infinity e +Infinity",
      string2 = "Meu avo tem 65 anos e minha avo 63", 
      string3 = "O contrato foi declarado null (nulo) e void(sem efeito)";

string1.search("number"); // ["21"]
string1.search(NaN); // ["0"]
string1.search(+Infinity); // ["30"]
string1.search(-Infinity); // ["46"]
string2.search(65); // ["12"]
string2.search(+65); // ["12"]
string3.search(null); //["25"]
