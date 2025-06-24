// type annotations
const myVar:any = {}
const myNull: null = null
const myUndefined: undefined = undefined

const myString: string = "Rincko"
const myNumber: number = 22
const myBoolean: boolean = true

//
function sum(a: number, b: number): number {
  return a + b;
}

//
const myName: string = "Rincko";
function greet(name: string, age?: number){}

greet(myName)

//
const func = (value: number) => value < 0;

const numbers = [1, 2, 3, -1, -4, -5];

numbers.filter(func)