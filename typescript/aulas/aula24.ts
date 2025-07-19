// Omit 

interface User {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
}

type UserInfo = Omit<User, "id" | "name">;

const user: UserInfo = {
  email: "user1@email.com",
  isAdmin: false
}

//
type DateProps = "getHours" | "getMinutes" | "getDay";
type DateTime = Omit<Date, DateProps>;

function main(date: DateTime){
  date.getMonth
}

//
interface Player {
  nick: string;
  health: number;
  shield: number;
  inventory: string[]
}

const player: Player = {
  nick: "White Hat",
  health: 90,
  shield: 10,
  inventory: ["shield", "sword", "helmet"]
}

function execute<T, K extends keyof T>(obj: T, keys: K[]):Omit<T, K>{
  return Object.create({})
}

const newPlayer = execute(player,["inventory"])

newPlayer.health