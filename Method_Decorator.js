// make a decorator to add logic on the basis of NODE_ENV
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function env_config(target, propertyName, pd) {
    // target === Employee.prototype
    // propertyName === "greet"
    // propertyDesciptor === Object.getOwnPropertyDescriptor(Employee.prototype, "greet")
    const method = pd.value;
    pd.value = (...array) => {
        console.log(...array);
        const result = method.apply(this, ...array); // {this} refers to method
        console.log("did somthing");
        // return result;
    };
    return pd;
}
class Employee {
    greet(name) {
        this.name = name;
        console.log("hello", this.name);
    }
    get(req, res, next) {
        console.log(this);
        console.log("here", req);
    }
}
__decorate([
    env_config
], Employee.prototype, "get", null);
console.log(Employee.prototype);
const emp1 = new Employee();
const next = (name) => {
    console.log;
};
console.log(emp1.get({ name: "ss" }, {}, next));
