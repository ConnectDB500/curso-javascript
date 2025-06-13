const umaPromessa = new Promise((resolve, reject) => {
  let soma = 1 + 3
  if(soma === 4) {
    resolve('Tudo certo!')
  }
  else {
    reject('Deu ruim!')
  }
})
console.log('Esperando promise...')

umaPromessa.then((resultado) => {
  console.log(`Valor do then: ${resultado}`)
}).catch((erro) => {
  console.error(`Valor do catch: ${erro}`)
}).finally(() => {
  console.log(`independente do resultado eu sempre estarei aqui`)
})

console.log('\n Event Loop')