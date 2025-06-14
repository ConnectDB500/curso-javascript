// call() e apply() tem uma sintaxe identica, a diferenca e que call() aceita uma linha de 
// argumentos, enquanto appy() aceita um array de argumentos.

// O metodo apply() chama uma funcao com um dado valor this, e argumentos passados como um 
// array (ou de um objeto array-like). Em outas palavras e um call() que aceita argumentos
// por meio de um array ao inves de serem passados individualmente (um a um)

const obj1 = {exemplo1: "exemplo 1", mostraThis: function thisCallExemplo(a, b, c) {
  console.log(this);
}}

obj1.mostraThis();

const obj2 = {exemplo2: "exemplo 2"}

obj1.mostraThis.apply(obj2, [1, 2, 3]);