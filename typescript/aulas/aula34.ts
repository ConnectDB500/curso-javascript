// declare

declare var nomad: string;

var nomad = "Nomad";

//
declare global {
  const Hacker: string;
}

Object.assign(globalThis, {
  Hacker: "Hacker"
})

//
interface UserData {
  id: number;
  name: string;
  age: number;
}

class User {
  declare id: number;
  declare name: string;
  declare age: number;
  constructor(data: UserData){
    Object.assign(this, data);
  }
}

const user = new User({ id: 1, name: "Nomad", age: 45 });

// 
process.env.PORT;

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string
    }
  }
}
