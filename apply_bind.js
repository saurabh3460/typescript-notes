class Employee {
  constructor(name, last) {
    this.name = name;
    this.last = last;
  }
  get() {
    return `${this.name} ${this.last}`;
  }
}

function override(target, propName) {
  let pd = Object.getOwnPropertyDescriptor(target, propName);
  let method = pd.value;
  pd.value = function(...rest) {
    console.log("This is original");
    const result = method.apply(this);
    return result;
  };
  return pd;
}

function methodDecorator(Class, method, rest) {
  const _method_pd = override(Class.prototype, method);
  let object = new Class(...rest);
  object[method] = _method_pd.value.bind(object);
  return object;
}

let emp1 = methodDecorator(Employee, "get", ["Jack", "Rayen"]);
console.log(emp1.get());
