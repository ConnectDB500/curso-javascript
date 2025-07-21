// A propriedade promise.prototype representa o prototipo para o metodo construtor 
// da Promise

const animal = {
  tipo: 'animal',
  som: 'som de animal',
  emitirSom: function(){
    console.log(this.som)
  }
}

const gato = {
  som: 'miau',                                                       
  tipo: 'gato'
}
Object.setPrototypeOf(gato, animal)
gato.emitirSom()

const gatoRaivoso = {
  tipo: 'gato raivoso',
  miarForte: function(){
    console.log(this.som.toUpperCase())
  }
}
Object.setPrototypeOf(gatoRaivoso, gato)
gatoRaivoso.miarForte()

console.log('Debug teste com: animal.__proto__')