const desks = [
  { type: "sitting" },
  { type: "standing" },
  { type: "sitting" },
  { type: "sitting" },
  { type: "standing" },
];

const deskTypes = desks.reduce(
  (acc, desk) => {
    if (desk.type === "sitting") {
      acc.sitting++;
    }
    if (desk.type === "standing") {
      acc.standing++;
    }
    return acc;
  },
  { sitting: 0, standing: 0 }
);

console.log(deskTypes);
