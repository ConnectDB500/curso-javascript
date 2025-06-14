// Exemplo de funcao aninhadas
let nivelGlobal = 'Nivel Global';
let nivel1 = undefined, nivel2 = undefined, nivel3 = undefined;

function funcaoNivel1() {
  let nivel1 = 'Nivel 1';

  function funcaoNivel2(){
    let nivel2 = 'Nivel 2';

    function funcaoNivel3(){
      let nivel3 = 'Nivel 3';
      console.log(`\nFuncao nivel 3 resultados: \n${nivelGlobal} \n${nivel1} \n${nivel2} \n${nivel3}`)
    }
    funcaoNivel3();

    console.log(`\nFuncao nivel 2 resultados: \n${nivelGlobal} \n${nivel1} \n${nivel2} \n${nivel3 ? nivel3 : "Nivel Inacessivel"}`)
  }
  funcaoNivel2();

  console.log(`\nFuncao nivel 1 resultados: \n${nivelGlobal} \n${nivel1} \n${nivel2 ? nivel2 : "Nivel Inacessivel"} \n${nivel3 ? nivel3 : "Nivel Inacessivel"}`)
}

funcaoNivel1();