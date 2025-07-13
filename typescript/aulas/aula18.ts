// keyof

interface Person {
  name: string;
  age: number;
  email: string
}

type PersonKeys = keyof Person;

function modifyProp(prop: PersonKeys){}

modifyProp(
  "age"
)

//
function getProperty<T, K extends keyof T>(obj: T, key: K){}

const person = {
  name: "Miguel",
  age: 45
};

const player = {
  nick: "Chavez",
  health: 80
}

const book = {
  title: "Dom Quixote",
  author: "Miguel Cervantes"
}

getProperty(person, "name");
getProperty(player, "nick");
getProperty(book, "title");