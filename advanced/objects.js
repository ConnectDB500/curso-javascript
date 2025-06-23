// Object.preventExtensions()
const object1 = {};

object1.a = 1234;

Object.preventExtensions(object1);

object1.b = 54321;

console.log(object1); // { a: 1234 }


// Object.freeze()
const object2 = {}

object2.a = 1234;

Object.freeze(object2);

object2.b = 54321;

delete object2.a;

console.log(object2); // { a: 1234 }

// Object.seal()
const object3 = {}

object3.a = 1234;

Object.seal(object3);

delete object3.a;

object3.a = 54321;

console.log(object3); // { a: 54321 }