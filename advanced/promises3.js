const statusPantera = 'feliz'

const isPanteraFeliz = new Promise((resolve, reject) => {
  switch(statusPantera){
    case "feliz":
      resolve({
        mensagem: "FELIZ",
      });
      break;
    case "entendiado": 
      reject({
        mensagem: "ENTEDIADO",
      });
      break;
    case "triste":
      reject({
        mensagem: "TRISTE",
      });
      break;
    default:
      reject({
        mensagem: "EMOCIONALMENTE INDEFINIDO",
      });
}
})


isPanteraFeliz.then((response) => {
  console.log('No primeiro then')
  return {mensagem: `${response.mensagem}`}
}).then((response) => {
  console.log('No segundo then')
  return {mensagem: `O gato esta: ${response.mensagem}`}
}).then((response) => {
  console.log('No terceiro then')
  console.log(`Tudo certo, ${response.mensagem}`)
}).catch((error) => {
  console.error(`Deu ruim ..., o gato esta ${error.mensagem}`)
})