function timeout(num) {
  return new Promise((resolve => setTimeout(() => resolve(num), 1000)));
}

async function countDown(num) {
  if (num <= 0){
    return console.log('Happy New Year!!!');
  }
  console.log(await timeout(num))

  return countDown(num - 1);
}

countDown(10)