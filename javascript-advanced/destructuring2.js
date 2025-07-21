let a, b;
({a, b} = {a:1, b:2});

console.log(a, b);

//
const {num=10, num1=5} = {num:3};

console.log(num, num1);

//
const obj = {p: 42, q: true};
const {p: foo, q:bar} = obj;

console.log(foo, bar);

//
let key = 'z';
let { [key]: foe } = { z: 'bar'};

console.log(foe);