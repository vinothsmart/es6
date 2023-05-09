// function unshift(array, a, b, c, d, e) {
//   return [a, b, c, d, e].concat(array);
// }

const unshift = (array, ...rest) => {
  return [...rest, ...array];
};

console.log(unshift([1, 2, 3], 4, 5, 6, 7, 8));
