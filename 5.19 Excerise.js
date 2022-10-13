const ladders = [
  { id: 1, height: "10 feet" },
  { id: 2, height: "20 feet" },
  { id: 3, height: "30 feet" },
];

const findWhere = (array, criteria) => {
  const property = Object.keys(criteria)[0];
  return array.find((element) => element[property] === criteria[property]);
};

findWhere(ladders, { height: "20 feet" });

// another solution
const find20FeetLadder = ladders.find((ladder) => ladder.height === "20 feet");
