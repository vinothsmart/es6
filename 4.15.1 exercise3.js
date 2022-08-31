const reject = (array, iteratorFunction) => {
  return array.filter((item) => !iteratorFunction(item));
};

const numbers = [10, 20, 30];
const lessThanFifteen = reject(numbers, (number) => number > 15);

console.log(lessThanFifteen);
