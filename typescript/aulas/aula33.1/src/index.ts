import { type User, createUser } from "./user.js";

const user: User = {
  name: "Hacker",
  age: 22,
  createdAt: new Date()
}

createUser("Hacker", 22);