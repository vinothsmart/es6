const compaines = [
  { name: "Google", location: "Mountain View" },
  { name: "Facebook", location: "Menlo Park" },
  { name: "Uber", location: "San Francisco" },
];

// using es5
// const location = compaines[0].location;
// console.log(location);

const [{ location }] = compaines;

console.log(location, location2);
