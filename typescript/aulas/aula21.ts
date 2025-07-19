// readonly

interface User {
  readonly id: string;
  name: string;
  age: number
}

const user: User = {
  id: "123456789",
  name: "Dev Java Junior",
  age: 44
}

Object.defineProperties(user, {
  id: {
    writable: false
  }
})

user.name = "DevOps";
user.age = 28;

//
class Command {
  public readonly createAt: Date;
  public name: string;
  constructor(name: string){
    this.name = name; 
    this.createAt = new Date();
  }

  public run(){
    this.name = "Dev Javascript Pleno";
  }
}

const command = new Command("ping");

//
interface Player {
  nick: string;
  health: number;
  shield: number;
  inventory: string[]
}

type StaticPlayer = Readonly<Player>

function play(player: StaticPlayer){
  player.nick
}

function freeze<T extends object>(obj: T): Readonly<T> {
  return Object.freeze(obj);
}

const player: Player = {
  nick: "Hacker",
  health: 70,
  shield: 20,
  inventory: ["potion", "wand", "book"]
}

const staticPlayer = freeze(player);