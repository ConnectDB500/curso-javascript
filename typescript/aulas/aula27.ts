// Exclude
type Primitive = string | number | boolean;

type Value = Exclude<Primitive, boolean | string>;

//
enum Colors {
  Yellow = "#fbff00ff",
  Red = "#ff0000",
  Orange = "#ffa500",
  Blue = "#0000ff",
  Green = "#008000"
}

type WarmColors = Exclude<Colors, Colors.Blue | Colors.Green>
type Coldcolors = Exclude<Colors, WarmColors>;

interface Message<T> {
  type: T;
  content: string;
  color: T extends "warm" ? WarmColors : Coldcolors
}

function createMessage<T extends "warm" | "cold">(options: Message<T>){}

createMessage({
  type: "warm",
  content: "Hello, world!",
  color: Colors.Orange
})