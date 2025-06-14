const main = () => {
  try {
    codigo
  } catch (error) {
    console.log(`Aconteceu o erro! Motivo:
      ${error}`)
  } finally {
    console.info('Independente do resultado o Finally sempre aparecera.')
  }
}

main();