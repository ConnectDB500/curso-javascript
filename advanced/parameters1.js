function multiplicar1(a=1, b=1) {

  return a + b;
}
console.log(multiplicar1(5))
console.log(multiplicar1())
console.log(multiplicar1(undefined, 6))

//
function multiplicar2(a, b) {
  b = typeof b !== "undefined" ? b :  1;
  a = typeof a !== "undefined" ? a : 1;

  return a * b;
}
console.log(multiplicar2(5))
console.log(multiplicar2())
console.log(multiplicar2(undefined, 6))

//
function teste(num = 1) {
  console.log(typeof num);
}
teste();
teste(undefined);
teste("");
teste(null);