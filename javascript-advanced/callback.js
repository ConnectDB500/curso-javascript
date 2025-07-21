// Uma funcao callback e uma funcao passada a outra funcao como argumento, que e entao 
// invocado dentro da funcao externa para completar algum tipo de rotina ou acao

// no JavaScript, as funcoes pode ser atribuidas a variaveis, passadas como argumento
// de funcoes e usadas como retorno.

const prompt = require('prompt-sync')();

const saudacao = (nome) => console.log('Ola, '+ nome);

const processaEntrada = (callback) => {
  const nome = prompt('Digite o seu nome: ');
  callback(nome);
}

processaEntrada(saudacao);