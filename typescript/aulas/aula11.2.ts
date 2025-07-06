// Overload

interface Triangle {
  sideA: number;
  sideB: number;
  sideC: number;
}
interface Equilateral extends Triangle {
  type: "equilateral"
}
interface Scalene extends Triangle {
  type: "scalene"
}
interface Isosceles extends Triangle {
  type: "isosceles"
}

type Triangles = Equilateral | Isosceles | Equilateral;

function triangle(sides: number): Equilateral;
function triangle(sideA: number, sideBC: number): Scalene
function triangle(sideA: number, sideB: number, sideC: number): Isosceles
function triangle(A: number, B?: number, C?: number){
  if (B && C){
    return {
      type: "scalene",
      sideA: A, sideB: B, sideC: C
    }
  }
  if (B && !C){
    return {
      type: "isoceles",
      sideA: A, sideB: B, sideC: B
    }
  }
  return {
    type: "equilateral",
    sideA: A, sideB: A, sideC: A
  }
}

//
class Player {
  public name: string;
  public nickname: string;
  public health: number;
  constructor(name: string, nickname: string)
  constructor(name: string, health: number)
  constructor(name: string, arg: string | number){
    this.name = name;
    if (typeof arg === "string"){
      this.nickname = arg;
      this.health = 20;
    } else {
      this.health = arg;
      this.nickname = name;
    }
  }
}

const hacker = new Player("Hacker", "ConnectUs");
const admin = new Player("Player", 1);