function concatenador(value, array = []) {
  array.push(value);
    return array;
}
concatenador(1);
concatenador(2);
console.log(concatenador(3));

//
function chamaFuncao(funcao = outraFuncao()) {
  return funcao;
}

function outraFuncao() {
  return "outraFuncao";
}

const resultado = chamaFuncao();

console.log(resultado);

//
function somador([x, y] = [1, 2], {z: z} = {z: 3}) {
  return x + y + z;
}
console.log(somador());
console.log(somador([3, 4], {z: 1}));