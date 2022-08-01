let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let doublenumbers = [];

for (let i = 0; i < numbers.length; i++) {
  doublenumbers.push(numbers[i] * 2);
}

const doubled = numbers.map((number) => {
  return number * 2;
});

console.log(doublenumbers);
console.log(doubled);
