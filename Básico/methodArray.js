// O objeto array de Javascript e um objeto global usado na construcao de 'arrays': objetos de alto 
// nivel semelhante a listas

// Criando Arrays recapitulacao
const meuArrayLiteral = [1, 2, 3];

const meuArrayConstructorLiteral = new Array(1, 2, 3);

const meuArrayConstructorCall = Array(1, 2, 3);

const meuArrayFrom = Array.from(meuArrayLiteral);

const meuArraySpread = [...meuArrayFrom];