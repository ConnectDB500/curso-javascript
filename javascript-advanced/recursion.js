function somaRecursiva1(n) {
  let soma = 0;

  for (let num = 1; num <= n; num++) {
    soma += num;
  }
  return soma;
}
console.log(somaRecursiva1(5))

//
function somaRecursiva2(n) {
  if (n === 1) {
    return 1;
  }
  return n + somaRecursiva2(n - 1);
}
console.log(somaRecursiva2(5))