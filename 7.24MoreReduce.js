const primaryColors = [
  { color: "red" },
  { color: "yellow" },
  { color: "blue" },
];

const result = primaryColors.reduce((previous, primaryColor) => {
  previous.push(primaryColor.color);
  return previous;
}, []);

console.log(result);
