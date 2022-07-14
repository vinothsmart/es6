// Create an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Create a variable to hold the sum
let sum = 0;

adder = (number) => {
  sum += number;
};

// Loop over the array, incrementing the sum variable
numbers.forEach(adder);

// print the sum varibale
console.log(sum);
