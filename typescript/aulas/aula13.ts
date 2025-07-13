// Narrowing

function printValue(value: string | number | boolean){
  if (typeof value === "string" || typeof value === "number"){
    value
    return;
  }
  value
}

//
class Dog {
  bark(){
    console.log("Woof!");
  }
}
class Cat {
  meow(){
    console.log("Meow!");
  }
}

function makeSound(animal: Dog | Cat){
  if (animal instanceof Dog){
    animal.bark();
    return;
  }
  animal.meow();
}
const dog = new Dog();
makeSound(dog);

//
interface Fish {
  swin: () => void;
}
interface Bird {
  fly: () => void;
}

function move(animal: Fish | Bird){
  if ("swin" in animal){
    animal.swin()
    return;
  }
  animal.fly()
}

//
function main(value: string[] | Date){
  if ("push" in value){
    value
    return;
  }
  value
}

//
function handle1(value: string | null){
  if (!value) return;
  value.toUpperCase();
}

//
interface User {
  id: string,
  name: string,
  nickname?: string;
}
function handle2(user?: User){
  if (!user) return;
  user.id.toUpperCase()
  user.name.toUpperCase()

  if (user.nickname){
    user.nickname.toUpperCase()
  }
}