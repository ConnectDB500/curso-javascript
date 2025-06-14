// O metodo Promise.all(lista) retorna uma promise que e resolvida quando todas as promises
// no argumento lista forem resolvidas ou rejeitada assim que uma das promises da lista for
// regeitada. Se a promise retornada for resolvida, ela e resolvida com uma array dos valores
// das promises resolvidas da lista. Se a promise for rejeitada, ela e rejeitada com o motivo 
// da primeira promise que foi rejeitada na lista. Este metodo pode ser util para agregar 
// de multiplas promises.

const promise1 = new Promise((resolve, reject) => {
  resolve("Promise 1 resolvida");
});

const promise2 = new Promise((resolve, reject) => {
  resolve("Promise 2 resolvida");
})

const promise3 = new Promise((resolve, reject) => {
  resolve("Promise 3 resolvida");
})

Promise.all( [promise1, promise2, promise3] ).then((messages) => {
  console.log(messages)
})