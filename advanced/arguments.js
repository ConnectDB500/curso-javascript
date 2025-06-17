function somaNumInfinito () {
  console.log(arguments);
  console.log('Waiting for ...')
  return "Fim\n";
}
console.log(somaNumInfinito(6, 8, 4, 6))


function somaNumInfinito1 () {
  const args = Array.from(arguments)
  let soma = 0;

  for(let num = 0; num < args.length; i++) {
    soma += args[num];

    return soma;
  }
}
console.log(somaNumInfinito1(6, 8, 4, 6))