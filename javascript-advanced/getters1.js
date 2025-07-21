class Usuario {
  #primeiroNome = "Brazilian";  // #primeiroNome == propriedade privada
  #segundoNome = "Dev";  // #segundoNome == propriedade privada

  get nomeCompleto() {
    return `${this.#primeiroNome} ${this.#segundoNome}`;
  }

  set nomeCompleto(value) {
    [this.#primeiroNome, this.#segundoNome] = value.split(" ");
  }
}

const usuario = new Usuario();

console.log(usuario.nomeCompleto);

usuario.nomeCompleto = "Programador Javascript";

console.log(usuario.nomeCompleto);