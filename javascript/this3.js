// Na arrow function, o this e definido lexicamente, isto e, seu valor e definido
// contexto de execucao onde  esta inserido. Em um codigo global, this assume o 
// objeto global.

// Contexto de criacao: GLOBAL
const arrowFunctionThis = () => {
  console.log(this);
}

// Contexto de criacao: OBJETO // ERRADO
const arrowFunctionThis1 = {
  prop: 150,
  arrowF: () => {
    console.log(this);
  }
}

// Contexto de criacao: OBJETO // CERTO
const obj1 = {
  exemplo1: "exemplo 1",
  mostraThis: function() {
    const f = (() => this)()
    console.log()
  }
}