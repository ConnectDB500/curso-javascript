// Em Javascript existem dois tipos de escopo: Local e Global
// Escopo de funcao -> var (NAO recomendado!!)
// Escopo de bloco -> let e const

// Escopo local
console.log(nomeCarro);  // ReferenceError: nomeCarro is not defined

function carros() {
  var nomeCarro = "Ferrari";
  console.log(nomeCarro);
}

carros()

// Escopo global
var nomeAuto = "Mustang";

console.log(nomeAuto); // Mustang

function automovel(){
  console.log(nomeAuto);
}

automovel();