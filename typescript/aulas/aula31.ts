// infer
const names = ["Dembele", "Marcos", "Cristiano"];
const numbers = [30, 11, 18, 22, 21];
const myarr1 = [...names, ...numbers];
const myarr = ["Raul", true, 28, "Drogba", null, 40, false, 92, 20]

type ArrayType1<Arr> =
  Arr extends string[] ? string :
  Arr extends number[] ? number :
  Arr extends (number | string)[] ? number | string : never;

type MyType1 = ArrayType1<typeof myarr1>;


type ArrayType2<Arr> =
  Arr extends Array<infer U> ? U : never;

type MyType2 = ArrayType2<typeof myarr>;

//
function customLog(color: "red" | "green", content: string){}
function myFetch(url: string, options: RequestInit){}
function createUser(name: string, age: number, isProgrammer: boolean){}
function pow(value: number){}

type GetsecoundParam<T> =
  T extends (p1: any, p2: infer Param, ...args: any) => any ? Param : never;

type FuncParam = GetsecoundParam<typeof createUser>


type GetParameters<T> =
  T extends (...args: infer Args) => any ? Args : never;

type FuncParams = GetParameters<typeof customLog>


const placeholders = [
  "variable(title)",
  "var(member)",
  "Hacker",
  "var(username)",
  "VAR(createdAt)",
  "var(timestamp)"
] as const

type Arr = typeof placeholders;

type GetVarName<T extends string> =
  T extends `var(${infer VarName})` ? VarName : never;

type Vars = GetVarName<Arr[number]>
