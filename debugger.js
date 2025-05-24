const str1 = "Brazilian Dev";

console.log(str1);

const funcaoLegal = (str) => {
  const retorno = str + " Legal";
  return retorno;
}

const retornoFuncaoLegal = funcaoLegal(str1);

if(str1.length > 10) {
  console.log(retornoFuncaoLegal);
} else {
  console.log("Nao deu para trazer o valor funcaoLegal");
}