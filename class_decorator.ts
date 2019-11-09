// function selfDriving(target: Function) {
//   target.prototype.selfDriving = true;
// }

// @selfDriving
// class car {
//   public car: string;
//   constructor(car: string) {
//     this.car = car;
//   }
// }

// let car1 = new car("NESSAN");
// console.log(car1["selfDriving"]);
class A {
  name: string;
  last: number;
}
let y: keyof A;
y = "name";

console.log(typeof y);
