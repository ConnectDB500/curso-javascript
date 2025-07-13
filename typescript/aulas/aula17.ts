// typeof
const username = "DevOps";

let nickname: typeof username = "DevOps";

type DevOpsuser = typeof username;

//
const person = {
  name: "Charles",
  age: 25
}

type Person = typeof person;

function createPerson(newPerson: Person){
  console.log(`Hello, sir ${person.name}`)
}

createPerson({
  name: "Dev Java Junior",
  age: 30
})