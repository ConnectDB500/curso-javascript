// Classe

class Person {
  protected age: number;
  constructor(age: number){
    this.age = age;
  }
  protected getAge(): number{
    return this.age;
  }
}

class Employee extends Person {
  private name: string;
  constructor(name: string, age: number){
    super(age);
    this.name = name;
  }
  public introduce(): void {
    console.log(`I'm ${this.name} and I'm ${this.getAge()} years old, it's a pleasure to meet you!`)
  }
}

const employee1 = new Employee("Hacker", 18);

