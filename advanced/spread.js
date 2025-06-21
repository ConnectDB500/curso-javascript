const listaNum1 = [5, 6, 3]
const listaNum2 = [4, 7, 2]

const listaNumTotal1 = listaNum1.concat(listaNum2) // Method .concat()
console.log(listaNumTotal1)

const listaNumTotal2 = [...listaNum1, ...listaNum2] // Spread Operator
console.log(listaNumTotal2)


// Comparison between Rest Parameters and Spread Operators
const somadorRest = (a, b, c) => {
  return a + b + c
}
console.log(somadorRest(listaNum2, ...listaNum1)) // Rest Parameters

const somadorSpread = (a, b, c) => {
  return a + b + c
}
console.log(somadorSpread(...listaNum1)) // Spread Operator


const obj1 = {a: 1, b: 1}
console.log(obj1)

const objCopy1 = {...obj1}
console.log(objCopy1)

const objCopy2 = Object.assign(obj1)
console.log(objCopy2)


const obj2 = {a: 1, b: 1}
console.log(obj2)

const objCopy3 = obj2 // Passing by reference from one constant to another constant
obj2.c = 3 
console.log(obj2) // The obj2 also have been modified
console.log(objCopy3) // Both variables point to the same place in memory