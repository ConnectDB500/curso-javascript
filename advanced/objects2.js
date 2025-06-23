const hybridObject = {
  addProp: "add string"
}

console.log( Object.isExtensible(hybridObject) )
console.log( Object.isSealed(hybridObject) )
console.log( Object.isFrozen(hybridObject) )

console.log('\n')

Object.preventExtensions(hybridObject)
Object.seal(hybridObject)
Object.freeze(hybridObject)

console.log(Object.isExtensible(hybridObject))
console.log(Object.isSealed(hybridObject))
console.log(Object.isFrozen(hybridObject))