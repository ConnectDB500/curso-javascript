// Extract
type Primitive = string | number | boolean | string[] | number[] | Date | Set<string>;

type MyType = Extract<Primitive, {length: number}>  

const dev = "Dev Csharp";

//
interface User {
  name: string;
  age: number;
}
interface Player {
  nickname: string;
  health: number;
}
interface Member {
  nickname: string;
  username: string;
}
interface Book {
  title: string;
  author: string;
}
interface Post {
  title: string;
  createdAt: Date;
  author: string;
}
interface Admin extends User {
  ban(user: User): void
  kick(user: User): void
}

type Elements = User | Player | Book | Admin | Post

type TheType1 = Extract<Elements, {name: string}>
type TheType2 = Extract<Elements, {nickname: string}>
type TheType3 = Extract<Elements, {title: string, createdAt: Date}>
