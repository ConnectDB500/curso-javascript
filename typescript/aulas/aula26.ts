// Required

interface User {
  id?: string;
  name?: string;
  email?: string;
  isAdmin?: boolean;
}

type RequiredUser = Required<User>;

const user: RequiredUser = {
  id: "1awd5",
  name: "Hacker",
  email: "user1@email.com",
  isAdmin: true
}

//
interface Player {
  nick: string;
  health: number,
  shield: number,
  inventory: string[]
}
const player: Required<Player> = {
  nick: "magician",
  health: 50,
  shield: 40,
  inventory: ["dagger", "potion", "hat"]
}

//
type MyFetchOptions = Required<Pick<RequestInit, "body" | "method">> & Omit<RequestInit, "body" | "method">

function myFetch(url: string, options?: MyFetchOptions){}