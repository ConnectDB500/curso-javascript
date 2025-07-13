// Generics

function logLength<T extends {length: number}>(item: T){
  console.log(item.length)
}

const numbers = [1, 2, 3];
const myObj = {length: 20};
const myName = "Cesar";

logLength(numbers);
logLength(myName);
logLength(myObj);

//
interface HasName {
  name: string;
}

function greet<T extends HasName>(obj: T){
  console.log(`Hello ${obj.name}`)
}

const player = {
  name: "Jeffren"
}

greet(player)

//
function combine<T extends number | string>(a: T, b: T): string{
  return `${a}${b}`
}
combine(10, 20);
combine("Cesar", "Anna");

//
class Animal {
  constructor(public name: string){}
}

class Dog extends Animal {
  bark(){
    console.log("Woof!");
  }
}

class Cat extends Animal {
  meow(){
    console.log("Meow!");
  }
}

function createInstance<T extends Animal>(Class: new (name: string) => T, name: string){
  return new Class(name)
}

const dog = createInstance(Dog, "Cesar");
const cat = createInstance(Cat, "Marie");