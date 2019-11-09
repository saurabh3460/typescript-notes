const paramValues: any[] = ["sendl", null];
const paramIndexes: number[] = [0, 1];
let hasErrors: boolean;

for (const [index, paramValue] of paramValues.entries()) {
  console.log(index, paramValue);

  if (paramIndexes.indexOf(index) != -1) {
    console.log(paramIndexes.indexOf(3));
    if (!paramValue) {
      console.error("method param at index " + index + " cannot be null");
      hasErrors = true;
    }
  }
}
