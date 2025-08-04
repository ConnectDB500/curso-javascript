import {useState} from 'react'

function Form() {
  function cadastrarUsuario(e){
    e.preventDefault()
    console.log("Usuario cadastrado!")
    console.log(`Usuario ${name} foi cadastrado com a senha: ${password}`)
  }

  const [name, setName] = useState()
  const [password, setPassword] = useState()

  return (
    <div>
      <h1>Meu cadastro: </h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htnlFor="name">Nome: </label>
          <input 
          type="text" 
          id="name" 
          name="name"
          placeholder="Digite o seu nome" 
          onChange={(e) => setName(e.target.value)}
        />
        </div>
        <div>
          <label htnlFor="password">Senha: </label>
          <input 
          type="password" 
          id="password"
          name="password"
          placeholder="digite o seu nome" 
          onChange={(e) => setPassword(e.target.password)}
        />
        </div>
        <div>
          <input type="submit" value="Cadastro" />
        </div>
      </form>
    </div>
  )
}

export default Form