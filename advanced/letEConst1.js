const obj = {a: 1, b: 2};
obj.c = 3;

console.log("obj "+obj);;

const obj1 = obj;
console.log("obj1 "+obj1);

delete obj1;

console.log("obj "+obj);
console.log("obj1 "+obj1);