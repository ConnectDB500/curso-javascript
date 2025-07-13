// Generics
class MyCustomArray<T> {
  private items: T[] = [];

  public add(item: T){
    this.items.unshift(item);
  }

  public remove(): T | undefined {
    return this.items.shift()
  }

  public isEmpty(): boolean {
    return this.items.length === 0;
  }
}

const myCustomStringArr = new MyCustomArray<string>();
myCustomStringArr.add("Cesar")
const removed = myCustomStringArr.remove()

const myCustomNumberArr = new MyCustomArray<number>();
myCustomNumberArr.add(1)

interface Player {
  name: string;
  health: number;
  shield: number;
  isDead: boolean;
}

const players = new MyCustomArray<Player>();
const removedPlayer = players.remove();

players.add({name: "Cesar", health: 20, shield: 5, isDead: false})