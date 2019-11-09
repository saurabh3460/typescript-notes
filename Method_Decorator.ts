// make a decorator to add logic on the basis of NODE_ENV

function Get(target: Object, propertyName: string, pd: PropertyDescriptor) {
  // target === Employee.prototype
  // propertyName === "greet"
  // propertyDesciptor === Object.getOwnPropertyDescriptor(Employee.prototype, "greet")
  const method = pd.value;
  pd.value = (...array: any[]) => {
    console.log(...array);
    const result = method.apply(this, ...array); // {this} refers to method
    console.log("did somthing");
    // return result;
  };
  return pd;
}

function Param() {}

interface next {
  (name: string): void;
}

class Employee<T> {
  private name: T;

  greet(name: T): void {
    this.name = name;
    console.log("hello", this.name);
  }
  @Get
  get(req: { name: string }, res: Object, next: next) {
    console.log(this);
    console.log("here", req);
  }
}

console.log(Employee.prototype);
const emp1 = new Employee<string>();
const next = (name: String) => {
  console.log;
};
console.log(emp1.get({ name: "ss" }, {}, next));
