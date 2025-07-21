const obj = {
  listaString: ["Inscreva-se", "Ative o sino", "Brazilian Dev"],
  get primeiraString() {
    return this.listaString.length ? this.listaString[0] : null;
  },
  set primeiraString(item) {
    this.listaString.unshift(item);
  },
};

console.log(obj.primeiraString);

obj.primeiraString = "Deixa um like";

console.log(obj.primeiraString);

//
const obj = { a: 0 }

Object.defineProperty(obj, "prop", {
  get() {
    return this.a;
  },
  set(x) {
    this.a = x;
  },
});

console.log(obj.prop);

obj.prop = 5;

console.log(obj.prop);

//
const str = "computada";

const obj = {
  a: "abcde",
  get [str]() {
    return this.a;
  },
  set [str](novoValor){
    this.a = novoValor;
  },
};

console.log(obj.computada);

obj.computada = "fghij";

console.log(obj.computada);