// Overload
/**
 * Criar uma nova data a partir de outra
 */
function createDate(value: Date): Date;
/**
 * Criar uma nova data usando uma data numerica
 */
function createDate(value: number): Date;
/**
 * Criar uma nova data usando data por extenso
 */
function createDate(value: string): Date;
function createDate(value: Date | number | string): Date {
  return new Date(value);
}

//
interface Person {
  name: string;
  age: number;
}

interface Dog {
  name: string;
  breed: string;
}

interface House {
  address: string;
  size: string;
}

function generate(type: "person"): Person;
function generate(type: "house"): House;
function generate(type: "dog"): Dog;
function generate(type: "person" | "house" | "dog"){
  switch(type){
    case "person": return {
      name: "Hacker", age: 25
    };
    case "house": return {
      zipcode: "123-456", address: "St. Saint Valentin, 987, apt.12"
    };
    case "dog": return {
      name: "Atila", breed: "Kangal"
    }
  }
}

const house = generate("house");
house.address