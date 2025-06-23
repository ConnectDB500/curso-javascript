let result;

function isBigger(a) {
  let comparing = false;
  return function isBigger2(b) {
    if (!b) {
      return comparing;
    }
    comparing = a > b;
    a = b;
    return isBigger2;
  };
}

result = isBigger(2)(5)(1)();  // isBigger(a)(b)(b)();

console.log(result);