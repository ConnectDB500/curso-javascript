// Temos uma Funcao de primeira Classe quando suas funcoes sao tratadas como qualquer outra variavel. 
// Essa funcao pode ser passada como argumento para outras funcoes, ser retornada por outra funcao e 
// pode ser atribuida como um valor a uma variavel.

// Atribuir uma funcao a uma variavel
const foo = function asd() {
  console.log('foobar')
}
foo()

// Passar uma funcao como um argumento
function dizola() {
  return 'Ola, ';
}

function apresentacao(funcaoMsgOla, nome) {
  console.log(funcaoMsgOla() + nome);
}
apresentacao(dizola, "Javascript");

// Retornar uma funcao
function printBrDev() {
  return function(){
    console.log("Brazilian Dev!");
  }
}

// Usando uma variavel
const myFunc = printBrDev();
myFunc();

// Usando parentese duplo
printBrDev()();