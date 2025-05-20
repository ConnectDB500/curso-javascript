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