function somaNumInfinito() {
  const args = Array.from(arguments)
  return args.reduce((accumulator, currentValue) => accumulator += currentValue
  )
}

console.log(somaNumInfinito(5, 6, 11, -9, 3, -4))