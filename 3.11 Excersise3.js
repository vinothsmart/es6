const panits = [
  { color: "red" },
  { color: "blue" },
  { color: "green" },
  { color: "yellow" },
];

const pluck = (array, property) => {
  return array.map((item) => item[property]);
};

console.log(pluck(panits, "color"));
