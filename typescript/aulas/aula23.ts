// Pick

interface User {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}

type UserInfo = Pick<User, "id" | "name">

const user: UserInfo = {
  id: "12345678",
  name: "Ricardo Bueno"
}

// 
type DateProps = "getHours" | "getMinutes" | "getDay"
type DateTime = Pick<Date, DateProps>

//
interface Player {
  nick: string;
  health: number;
  shield: number;
  inventory: string[]
}

const player: Player = {
  nick: "Red Hat",
  health: 60,
  shield: 20,
  inventory: ["potion", "ring", "cape", "book"]
}

function execute<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>{
  return Object.create({});
}

const newPlayer = execute(player, ["health"])

newPlayer.health