const funcao1 = () => {}

const funcao2 = () => {}

const funcao3 = () => {}

const main = () =>  {
  try {
    try {
      try {
        try {
            throw new Error('Erro da funcao 3')
        } catch (error) {
          console.log(`${error}`);
          throw error;
        }
      } catch (error) {
          console.log(`${error}`);
          throw error;
      }
    } catch (error) {
        console.error(`${error}`);
        throw error;
    }
  } catch (error) {
    console.error(`${error}`);
  }
  console.log('Passou por aqui');
}

main();