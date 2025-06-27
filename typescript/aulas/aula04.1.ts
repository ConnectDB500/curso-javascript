// Types

interface Dog {
  name: string;
  breed: string;
  bark(): string;
}

interface Cat {
  name: string;
  color: string;
  meow(): string;
}

interface Bird {
  name: string;
  wingspan: string;
  chirp(): string;
}

interface Cow {
  name: string;
  weight: number;
  moo(): string;
}

type Animal = Dog | Cat | Bird | Cow;

function createAnimal(animal: Animal){}

createAnimal({
  name: "Atila",
  breed: "Rottweiller",
  bark() {
    return "HOWHOWHOW! "
  }
})