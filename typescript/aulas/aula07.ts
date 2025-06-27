// Type Intersections &


interface Robot {
  material: string;
  fuel: string;
}

interface Human {
  name: string;
  age: string;
}

type Cyborg = Robot & Human;
