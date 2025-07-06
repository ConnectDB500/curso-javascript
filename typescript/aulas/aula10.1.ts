// Classes

class Animal {
  name: string;
  age: number;
  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }
  makeSound(): void {
    console.log(`${this.name} esta fazendo um som`);
  }
}

class Dog extends Animal {
  breed: string;
  constructor(name: string, age: number, breed: string){
    super(name, age);
    this.breed = breed;
  }
  makeSound(): void {
    console.log(`${this.name} is barking`);
  }
}

const dog = new Dog("Bob ", 3,"Bourboe");

dog.makeSound();

//
interface Drivable {
  startEngine(): void;
  drive(): void;
}

class Car implements Drivable {
  startEngine(): void {
    throw new Error("Method not implemented.");
  }
  drive(): void {
    throw new Error("Method not implemented.");
  }
}

//
abstract class Shape {
  abstract area(): number;
  describe(): void{
    console.log("This is a shape")
  }
}

class Circle extends Shape {
  area(): number {
    return Math.PI * this.radious ** 2;
  }
  describe(): void {
    console.log("This is a circle")
  }

  radious: number;
  constructor(radious: number){
    super();
    this.radious = radious;
  }
}

const circle = new  Circle(5);

circle.area()