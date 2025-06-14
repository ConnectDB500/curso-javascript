// Comportamento 2
// Somente declaracoes sao elevadas. Inicializacoes nao fazem parte do hoisting.
var y = 10

console.log(x, y)

var y = 7

// O resultado no terminal sera: 10 undefined