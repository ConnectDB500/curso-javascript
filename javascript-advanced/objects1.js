const noExtension = {
  addProp: "add strind"
}

const sealedObject = {
  addProp: "add string"
}

const frozenObject = {
  addProp: "add string"
}

console.log( Object.isExtensible(noExtension) )
console.log( Object.isSealed(sealedObject) )
console.log( Object.isFrozen(frozenObject) )

console.log('\n')

Object.preventExtensions(noExtension)
Object.seal(sealedObject)
Object.freeze(frozenObject)

console.log(Object.isExtensible(noExtension))
console.log(Object.isSealed(sealedObject))
console.log(Object.isFrozen(frozenObject))