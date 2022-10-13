const names = ["Alice", "Bob", "Tiff", "Bruce"];

const checkEvenNames = names.every((name) => name.length > 4);
console.log(checkEvenNames);

const checkSomeNames = names.some((name) => name.length > 4);
console.log(checkSomeNames);
