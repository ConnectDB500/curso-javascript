function init() {
  const nome = "Essa e a string da constante nome dontro da funcao mostraNome()";
  function mostraNome() {
    console.log(nome);
  }
  return mostraNome;
}

const minhaFuncao = init();
minhaFuncao();

//
function criarContador(){
  let contador = 0;

  return function(){ // inicio da closure
    console.log(contador);
    contador += 2;
  }; // final 
}

const contador = criarContador();
contador();
contador();
contador();
contador();