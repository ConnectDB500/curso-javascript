function Evento({ numero }) {
  function meuEvento(event){
    event.preventDefault();
    console.log(`Evento disparado: ${numero}`);
  }

  return(
    <div>
      <p>Clique para dispara o evento!</p>
      <button onClick={meuEvento}>Ativar</button>
    </div>
  )
}

export default Evento