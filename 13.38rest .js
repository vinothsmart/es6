const defaultColors = ["red", "green"];
const userFavoriteColors = ["orange", "yellow"];
const fallColors = ["fire red", "fall orange"];

console.log(defaultColors.concat(userFavoriteColors));

console.log([
  "green",
  "blue",
  ...fallColors,
  ...defaultColors,
  ...userFavoriteColors,
]);
