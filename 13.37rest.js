const addNumbers = (a, b, c, d, e) => {
  const numbers = [a, b, c, d, e];
  return numbers.reduce((sum, number) => sum + number, 0);
};

console.log(addNumbers(1, 2, 3, 4, 5));
