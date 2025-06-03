const funcao = function() {
  console.log("Expressao de funcao");
}
funcao();

function funcaoF() {
  console.log("Declaracao de funcao");
}
funcaoF();


const minhaFuncao = () => {
  return "Uma expressao de funcao em arrow function";
}
console.log(minhaFuncao());


const funcaoX = () => "Uma expressao de funcao em arrow function";
console.log(funcaoX);


const thisGlobal = () => {
  console.log(this);
}
thisGlobal();

const obj = {
  thisLocal: () => console.log(this)
}
obj.thisLocal();

const obj1 = {
  thisLocal: function() {
    const thisLocal = () => console.log((this))() //IIFE
    console.log(thisLocal)
  }
}

// Pode ser utilizado o call(), apply(), bind()