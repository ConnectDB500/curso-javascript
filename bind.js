// O metodo bind() cria uma nova funcao que, quando chamada, tem sua palavra chave this
// definido com o valor fornecido, com uma sequencia determinada de argumentos precedendo
// quaisquer outros que sejam fornecidos quando a nova funcao e chamada.

// Usando o 'use strict' o this se torna undefined, sem o 'use strict' o this aponta 
// para o objeto global

// 'use strict'
function thisBindExemplo() {
  console.log(this);
}

const obj = {exemplo: "exemplo"}

thisBindExemplo = thisBindExemplo.bind(obj);

thisBindExemplo();

console.log(typeof thisBindExemplo());
console.log(typeof obj);