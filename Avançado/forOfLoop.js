const listaDeEstado = ["RJ", "SP", "MG"];
let estado;

for(estado of listaDeEstado){
  console.log(estado + " e um Estado brasileiro")
}

//node ./forOfLoop.js

const nome = "Connect Us";

for(let letra of nome){
  console.log(letra.toUpperCase());
}