// Giant Robot class

// Goal creat an interface with a methods 

// All Robots have name, power and type. 
// Kaiju should have a describe method that 
// prints: name:<name> type:<type> power:<power>


interface Robot {
  name: string;
  power: number;
  type: string;
  describe: () => void;
}

class GiantRobot implements Robot {
  public name: string;
  public power: number;
  public type: string;

  constructor(name: string, power: number, type: string) {
    this.name = name;
    this.power = power;
    this.type = type;
  }

  describe(): void {
    console.log(`name:${this.name} type:${this.type} power:${this.power}`);
  }
}