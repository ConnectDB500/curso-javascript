function somaNumInfinito(...args) {
  return args.reduce((acumula, valor) => acumula += valor)
}
console.log( somaNumInfinito(5, 6 , -4, 3))


const multPorPrimeiro = (multi, ...args) => {
  return args.map((num) => {
    return multi * num
  })
}
console.log( multPorPrimeiro(-5, -6, 4, -3))