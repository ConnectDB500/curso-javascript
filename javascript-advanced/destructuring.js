const foo = ['one', 'two', 'three'];

const [one, two, three] = foo;

console.log(one);
console.log(two);
console.log(three);

//
let a, b;

[a, b] = [1, 2]

console.log(`a: ${a}`)
console.log(`b: ${b}`)

//
let c, d;

[c=3, d, e, f=4] = [1, 2];

console.log(`c: ${c}`);
console.log(`d: ${d}`);
console.log(`e: ${e}`);
console.log(`f: ${f}`);