const funcao1 = () => {
  console.log('Sou a funcao 1');
  const valor = true;

  try {
    if (valor) {
      throw new Error('valor == true')
    }
  } catch (error) {
    console.error(`${error}`);
    throw error;
  }
}

const funcao2 = () => {
  console.log('Sou a funcao 2')

  codigo2;
}

const main = () => {
  try {
    funcao1();
    funcao2();
    console.log('Passou por aqui');
  } catch (error) {
    console.log(`${error}`)
  }
}

main();