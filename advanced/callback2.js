const statusPantera = 'feliz'

function isPanteraFeliz(useCallback, errorCallback) {
  switch(statusPantera){
    case "feliz":
      useCallback({
        mensagem: "FELIZ",
      });
      break;
    case "entendiado": 
      errorCallback({
        mensagem: "ENTEDIADO",
      });
      break;
    case "triste":
      errorCallback({
        mensagem: "TRISTE",
      });
      break;
    default:
      errorCallback({
        mensagem: "EMOCIONALMENTE INDEFINIDO",
      });
  }
}

isPanteraFeliz(
  (response) => console.log(`Tudo certo, o gato esta ${response.mensagem}`),
  (error) => console.log(`Deu ruim ... o gato esta ${error.mensagem}`)
)