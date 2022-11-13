const numbers = [1, 1, 2, 3, 4, 4];

const unique = numbers.reduce((acc, number) => {
  if (!acc.includes(number)) {
    acc.push(number);
  }
  return acc;
}, []);

console.log(unique);
