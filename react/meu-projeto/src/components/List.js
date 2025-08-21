import Item from "./Item";

function List(){
  return(
    <>
    <h1>Minha Lista</h1>
    <ul>
      <Item marca="Ferrari" ano_lancamento={2020} />
      <Item marca="Lamborgini" ano_lancamento={2019} />
      <Item marca="Porsche" ano_lancamento={2022} />
      <Item marca="Mercedes-Benz" ano_lancamento={2023} />
    </ul>
    </>
  )
}

export default List