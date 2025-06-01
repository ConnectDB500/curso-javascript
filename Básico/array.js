// O objeto Array de Javascript e um objeto global usado na construcao de "arrays": objeto de alto
// nivel semelhante a listas
// Indices sao acessados por meio de numeros a partir de 0. Ex: arr[0] - arr[1] - arr[2]
// Acessamos o tamanho de array por meio da propriedade natina "length". Ex: arr.length

// Criando um Array literal
let frutas = ['Laranja', 'Banana'];
console.log(frutas.length);

// Desta outra forma o operador new constroi um novo objeto por meio da funcao construtora
let frutasUsandoNew = new Array('Laranja', 'Banana');
let arrTamanho = new Array(10);
console.log(frutasUsandoNew);

// Exemplo de Array denso:
const arrDenso = [1, 2, 3, 4, 5, 6]

// Exemplo de Array esparso
const arrEsparso = [1,,,3]

// Tornando-oo esparso por meio de insersao posterior
arrEsparso[10] = 10

//Deletar elementos de um Array
// O "delete" nao retira o espaco ocupado pelo elemento. Apenas exclui o dado que estava nesse espaco,
// e coloca "undefined" em seu lugar
const arrDel = ['a', 'b', 'c', 'd']
delete arrDel[1]

// A propriedade length e writable, isso quer dizer que pode ser alterada.
const animais = ["cao", "gato", "cavalo", "elefante", "leao", "tartaruga"]
animais.length
animais.length = 4
animais             //["cao", "gato", "cavalo", "elefante"]