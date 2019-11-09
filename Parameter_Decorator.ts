function logParameter(target: Object, propertyName: string, index: number) {
  // generate metadatakey for the respective method
  // to hold the position of the decorated parameters
  const metadataKey = `log_${propertyName}_parameters`;
  console.log("target :", typeof target);
  console.log("propertyName :", propertyName);
  console.log("index :", index);
  console.log(
    "Array.isArray(target[metadataKey]) :",
    Array.isArray(target[metadataKey])
  );

  if (Array.isArray(target[metadataKey])) {
    target[metadataKey].push(index);
    console.log("metadataKey :", target[metadataKey]);
  } else {
    target[metadataKey] = [index];
    console.log("metadataKey :", target[metadataKey]);
  }
}

class Employee1 {
  greet(@logParameter message: string): string {
    return `hello ${message}`;
  }
}
const emp = new Employee1();
emp.greet("hello");
