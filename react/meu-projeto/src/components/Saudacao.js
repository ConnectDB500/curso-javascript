function Saudacao({nome}){
  function gerarSaudacao(outroNome){
    return `Ola, ${outroNome}, tudo bem?`
  }

  return (
    <>
      {nome && <p>{gerarSaudacao(nome)}</p>}
    </>
  )
}

export default Saudacao