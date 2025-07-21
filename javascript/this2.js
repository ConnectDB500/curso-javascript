// Quando nao tiver no modo estrito o this apontara para o objeto global
function thisNaoEstrito(){
  console.log(this);
}

// Em modo estrito, o valor de this permanece seja qual for o definido ao entrar no contexto
// de execucao, a sequir, this po padrao sera indefinido (undefined)
function thisestrito(){
  'use strict';
  console.log(this);
}

thisNaoEstrito();
thisestrito();

// Como metodo de um objeto
const o = {
  prop: 100,
  f: function() {
    return this.prop;
  }
};
console.log(o.f())