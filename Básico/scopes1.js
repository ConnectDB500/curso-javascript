//Escopos de funcao e escopo de bloco
for(let bloco = 0; bloco < 10; bloco++)
  console.log(bloco)
console.log("---")

for(var funcao = 0; funcao < 10; funcao++)
  console.log(funcao)

// Terminal
let nome = "Andreas"
window.nome     // undefined

var carro = "Corvette"
window.carro    // Corvette

// Argumentos de funcao (parametros) sao vistos como variaveis locais dentro da funcao
function paramsLocais(local1, local2){
  console.log(local1, local2);
}

paramsLocais('Sou local 1', 'Sou local 2')