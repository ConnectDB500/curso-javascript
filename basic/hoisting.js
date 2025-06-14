// Em javascript, funcoes e variaveis sao hoisted (ou "levadas ao topo"). Hoisting e um comportamento
// do Javascript de mover declaracoes para o topo de um escopo (o escopo global ou da funcao em que
// se encontra)
// "var" e a unica palavra-chave que permiter com que o interpretador do javascript faca o hoisting!
// Por isso e importante sempre dar preferencia ao uso de "let" e "const" para criacao de variaveis 
// e constantes, pois sao imuneis a esse tipo de efeito colateral.

// comportamento 1:
num = 2
console.log(num)
var num;

// O javascript entende como:
// var num;
// num = 2;

// Tambem funciona com funcoes
hoisted();

function hoisted(){
  console.log("Comportamento do JS")
}