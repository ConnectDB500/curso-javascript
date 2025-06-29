// Classes

export class Player {
  private static players: Player[] = [];
  name: string;
  private health: number;
  constructor(name: string){
    this.name = name;
    this.health = 20;
    Player.players.push(this);
  }
  public getName(){
    return this.name;
  }
  public getHealth(){
    return this.health;
  }
  public damage(amount: number, damager?: Player){
    const upDatedHealth = this.health - amount;

    console.log(damager 
      ? `${damager.getName()} hited ${amount} of damage on ${this.name}`
      : `${this.name} was hited: ${amount} total damage!` 
    )

    if (upDatedHealth <= 0){
      this.health = 0;
      this.die();
      return;
    }
    this.health = upDatedHealth;
  }
  private die(damager?: Player){
    if (damager){
      console.log(this.name + "was killed by " + damager.getName());
      return;
    }
    console.log("GAME OVER");
  }
}

const hacker = new Player("Red Hat");
const geek = new Player("Developer");

hacker.damage(10, geek);