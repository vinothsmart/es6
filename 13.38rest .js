// const defaultColors = ["red", "green"];
// const userFavoriteColors = ["orange", "yellow"];
// const fallColors = ["fire red", "fall orange"];

// console.log(defaultColors.concat(userFavoriteColors));

// console.log([
//   "green",
//   "blue",
//   ...fallColors,
//   ...defaultColors,
//   ...userFavoriteColors,
// ]);

const validateShoppingList = (...items) => {
  if (items.indexOf("milk") < 0) {
    return ["milk", ...items];
  }
  return items;
};

console.log(validateShoppingList("oranges", "bread", "eggs"));
