// As funcoes construturas sao usadas para construir objetos
// Exemplo de funcao construtora de ventiladores
function Ventilador(velMax){
  this.velocidadeMaxima = velMax;
  this.ligado = false;
}

// Istancias
// Para criar uma instancia de um objeto do tipo "ventilador" usamos a palavra reservada "new" 
const ventilador1 = new Ventilador(3)

// Para acessar propriedades usamos dot notation "."
console.log(ventilador1.velocidadeMaxima)

// Podemos adicionar propiedades e metodos em tempo de execucao
ventilador1.cor = "azul metalico"
console.log(ventilador1.cor)

ventilador1.ligaDesliga = function() {
  if(this.ligado)
    this.ligado = false
  else
    this.ligado = true
}

ventilador1.ligaDesliga()
console.log(ventilador1.ligado)

ventilador1.ligaDesliga()
console.log(ventilador1.ligado)

console.log(ventilador1)

// Adicionando o metodo por meio de prototipo para que seja aplicado a todos os objetos
function liga() {
  this.ligado = true;
}
Ventilador.prototype.ligar = liga;