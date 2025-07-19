// Partial

interface User {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}

type PartialUser = Partial<User>;

//
interface Player {
  nick: string;
  health: number;
  shield: number;
  inventory: string[]
}

type CustomPlayer = Partial<Omit<Player, "nick">> & Pick<Player, "nick">;

const player: CustomPlayer = {
  nick: "Hacker",
  health: undefined
}

//
type PackageJson = Partial<typeof import ("../package.json")>