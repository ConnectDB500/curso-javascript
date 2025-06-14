// call() e apply() tem uma sintaxe identica, a diferenca e que call() aceita uma linha de 
// argumentos, enquanto appy() aceita um array de argumentos.

//O metodo call() chama uma funcao com o dado 'this' e argumentos passados individualmente. 
// O call() permite que uma funcao/metodo, pertecente a um dado objeto, seja atribuido e 
// chamado por um objeto diferente. Dessa forma podemos reutilizar o metodo de um objeto
// em diversos outros objetos.

const obj1 = {
  exemplo1: "exemplo 1",
  mostraThis: function thisCallExemplo() {
  console.log(this)
}}

obj1.mostraThis()

const obj2 = {exemplo2: "exemplo 2"}

obj1.mostraThis.call(obj2)