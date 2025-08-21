import { useState } from "react";

function Form(){
  function cadastrarUsuario(event){
    event.preventDefault()
    console.log(`Usuario ${name} foi cadastrado com a senha ${password}`);
  }

  const [name, setName] = useState()
  const [password, setPassword] = useState()

  return(
    <div>
      <h1>Meu cadastro</h1>
      <form onSubmit={cadastrarUsuario}>
        <label htmlFor="name">Nome: </label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          placeholder="digite seu nome"
          onChange={(event) => setName(event.target.value)}
        />

        <label htmlFor="password">Senha: </label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          placeholder="********"
          onChange={(event) => setPassword(event.target.value)}
        />
        
        <input type="submit" value="cadastrar" />
      </form>
    </div>
  )
}

export default Form