class stringTester {
  static #strInterna = "Uma string teste";
  static get str() {
    return this.#strInterna;
  }

  static set str(valor) {
    this.#strInterna = valor;
  }
}

console.log(stringTester.str);

stringTester.str = "Teste de string";

console.log(stringTester.str);