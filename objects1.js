// Bracket notation (notacao de colchete)

const bracketNotation = {
  prop1: "Sou uma propriedade que sera acessada usando bracket notation",
  metodo: function() {
    return "Sou o returno de um metodo, ou seja, uma funcao dentro de um objeto"
  }
}

bracketNotation["prop2"] = "Sou outra propriedade com valor do tipo string"
bracketNotation["metodo2"] = () => "Sou o retorno de outro metodo"

console.log(bracketNotation['prop1'])
console.log(bracketNotation["metodo"]())

console.log(bracketNotation["prop2"])
console.log(bracketNotation["metodo2"]())