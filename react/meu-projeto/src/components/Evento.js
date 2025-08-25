import Button from "./evento/button"

function Evento() {
  function meuEvento(){
    console.log(`Opa, fui ativado`);
  }

  function segundoEvento(){
    console.log("Ativando o segundo evento!");
  }

  return(
    <div>
      <p>Clique para dispara o evento!</p>
      <Button event={meuEvento} text="Primeiro Evento" />
      <Button event={segundoEvento} text="Segundo Evento" />

    </div>
  )
}

export default Evento