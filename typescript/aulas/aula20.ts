// never

function throwError(message: string): never {
  throw new Error(message);
}

function main(){
  try {
    throw new Error("Ocorreu um erro")
  } catch(err){
    console.log("Algo saiu errado")
  }

  const name = "Dev Junior";
  console.log(name);
}

//
function narrow(x: string | number){
  if (typeof x === "string"){
    x;
    return;
  }
  if (typeof x === "number"){
    x;
    return;
  }
  x;
}