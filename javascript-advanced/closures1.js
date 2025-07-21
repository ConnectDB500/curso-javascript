// Currying
function soma(num1) {
  return (num2) => {
    if (!num2) {
      return num1;
    }
    return soma(num1 + num2);
  }
}
console.log(soma(2)(3)(5)(10)(4)(-1)())

// Closure
let result;

function isBigger(a) {
  return function (b) {
    return a > b;
  };
}
result = isBigger(2)(5);
console.log(result);