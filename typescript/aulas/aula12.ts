// Type guards
function printValue(value: string | number){
  if (typeof value === "string"){
    console.log(value.toUpperCase())
  } else {
    console.log(value.toFixed(2))
  }
}

//
class Dog {
  bark(){
    console.log("Woof!");
  }
}
class Cat {
  meow(){
    console.log("Meow!")
  }
}
function makeSound(animal: Dog | Cat){
  if (animal instanceof Dog){
    animal.bark()
    return;
  }
  animal.meow()
}

//
interface Fish {
  swin: () => void;
}
interface Bird {
  fly: () => void;
}
function move(animal: Bird | Fish){
  if ("swin" in animal){
    animal.swin()
  } else {
    animal.fly()
  }
}

//
function main(value: string[] | Date){
  if ("push" in value){
    value.push("This is Array string")
  } else {
    value.getDate()
  }
}