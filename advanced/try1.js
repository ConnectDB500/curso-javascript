const funcao1 = () => {
  console.log('Sou da funcao 1');

  try {
    codigo;
  } catch (error) {
    console.error(`${error}`);
    throw error;
  }
}

const funcao2 = () => {
  console.log('Sou da funcao 2');

  codigo;
}

const main = () => {
  try {
    funcao1();
    funcao2();

    console.log('Passou por aqui');
  } catch (error) {
    console.error(error);
  }
}

main();