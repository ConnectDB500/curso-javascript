// O metodo Promise.race(lista) retorna uma promise que resolve ou rejeita assim que uma das 
// promises do argumento lista resolve ou rejeita, com um valor ou motivo daquela promise

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 1 resolvida"), 1000)
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 2 resolvida"), 500)
})

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 3 resolvida"), 100)
})

Promise.race( [promise1, promise2, promise3] ).then((messages) =>{
  console.log(messages)
})