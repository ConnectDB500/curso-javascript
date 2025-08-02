function Evento({numero}){
  function meuEvento(){
    console.log(`Evento ativado! ${numero}`)
  }

  return(
    <div>
      <p>Clique para disparar um evento:  </p> <br/>
      <button onClick={meuEvento}>Ativar</button>
    </div>
  )
}

export default Evento