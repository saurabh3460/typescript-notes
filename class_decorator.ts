function selfDriving(target: Function) {
  target.prototype.selfDriving = true;
}

@selfDriving
class car {
  public car: string;
  constructor(car: string) {
    this.car = car;
  }
}

let car1 = new car("NESSAN");
console.log(car1["selfDriving"]);
