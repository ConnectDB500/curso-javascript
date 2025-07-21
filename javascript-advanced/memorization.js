const memo = {};

const fib = (n, memo ) => {
  if(memo[n]) {
    return memo[n];
  }

  if(n <= 1){
    return 1;
  }

  return memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
}

console.log(`fibonacci: ${fib(115, memo)}`);
console.log(`fibonacci: ${fib(50, memo)}`);
console.log(`fibonacci: ${fib(115, memo)}`);