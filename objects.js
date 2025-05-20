// Um objetos e uma colecao de dados relacionados e/ou funcionalidade (que geralmente consistem
// em diversas variaveis e funcoes - que sao chamadas propriedade e metodos quando estao dentro 
// de um objeto). Objetos podem ser inicializados usando "new Object()", "Object.create()" ou 
// usando a forma notacao literal. 

// Inicializacao um objeto usando a notacao literal
const dotNotation = {
  prop1: "Sou uma propriedade que sera acessda usando dot notation",
  metodo: function() {
    return "Sou um retorno de um metodo, ou seja, uma funcao dentro de um objeto"
  }
}

dotNotation.prop2 = "Sou outra propriedade com valor tipo string"
dotNotation.metodo2 = () => "Sou o retorno de outro metodo"

console.log(dotNotation.prop1)
console.log(dotNotation.metodo())

console.log(dotNotation.prop2)
console.log(dotNotation.metodo2())