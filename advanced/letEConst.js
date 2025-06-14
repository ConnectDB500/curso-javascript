for(let i = 0; i <= 10; i++) {
  var j = i;
}

console.log(i, j ); // Erro: i nao foi definido


if (true) {
  var exposta = "exposta";
  let naoExposta = "nao exposta";
}

console.log(exposta, naoExposta); // Erro: naoExposta nao foi definida