const destino = {a: 1, b: 2};
const origem = {b: 4, c: 5};

const destinoRetornado = Object.assign(destino, origem);

console.log(destinoRetornado, destino)

// Copia de Objeto
const obj = {a: 1};
const copia = Object.assign({}, obj)

console.log(copia, obj)

// Mesclagem de objetos
const o1 = {a: 1};
const o2 = {b: 2};
const o3 = {c: 3};

const obj1 = Object.assign({}, o1, o2, o3);

console.log(obj1, o1);

// Transformar Array em Objeto
const fromEntries = [
  ["abc", 2],
  ["def", 4]
];

const toObjeto = Object.fromEntries(fromEntries);

console.log(toObjeto);

// Transformar Objeto em Array
const objetoDeEntrada = {
  "ghi": 6,
  "jkl": 8
}

const toArray = Object.entries(objetoDeEntrada);

console.log(toArray);

// Chaves e Valores
const num = {1: "a", 2: "b", 3: "c"};

const keys = Object.keys(num);
const values = Object.values(num);

console.log(keys, values);