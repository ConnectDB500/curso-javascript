import Item from './Item.js'

function List() {
  return (
    <>
      <h1>Minha Lista</h1>
      <ul>
        <Item marca="Lamborgni" ano_lancamento={2022} />
        <Item marca="Porsche" ano_lancamento={2019} />
        <Item marca="Corvett" ano_lancamento={2017} />
      </ul>
    </>
  )
}

export default List