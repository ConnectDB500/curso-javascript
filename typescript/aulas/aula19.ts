// conditional types

type Conditional<T> = T extends string ? "string" : "nao string";

function conditional<T>(value: T): Conditional<T>{
  const text = typeof value === "string"
  ? "string"
  : "nao string"
return text as Conditional<T>;
}

const result = conditional("Typescript");
const outroResult = conditional(true);

//
class SelectMenu {};
class Checkbox {};
class Input {};
class Button {};

type ElementType = "input" | "button" | "selectmenu" | "checkbox";

type GetElement<T> = 
    T extends "input" ? Input :
    T extends "button" ? Button :
    T extends "selectmenu" ? SelectMenu :
    T extends "checkbox" ? Checkbox : 
    never;

interface Data<T extends ElementType>{
  type: T;
  execute(element: GetElement<T>): void;
}

function createData<T extends ElementType>(data: Data<T>){}

createData({
  type: "checkbox",
  execute(element) {},
})