const funcao1 = () => {
  try {
    funcao2()
  } catch (error) {
    console.error(`${error}`);
    throw error;
  }
}

const funcao2 = () => {
  try {
    funcao3()
  } catch (error) {
    console.log(`${error}`);
    throw error;
  }
}

const funcao3 = () => {
  try {
    throw new Error('Erro da funcao 3')
  } catch (error) {
    console.log(`${error}`);
    throw error;
  }
}

const main = () =>  {
  try {
    funcao1();
  } catch (error) {
    console.error(`${error}`);
  }
  console.log('Passou por aqui');
}

main();