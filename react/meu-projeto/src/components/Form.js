function Form() {
  function cadastrarUsuario(e){
    e.preventDefault()
    console.log("Usuario cadastrado!")
  }

  return (
    <div>
      <h1>Meu cadastro: </h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <input type="text" placeholder="digite o seu nome" />
        </div>
        <div>
          <input type="submit" value="Cadastro" />
        </div>
      </form>
    </div>
  )
}

export default Form