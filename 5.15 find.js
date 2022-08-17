const users = [
  {
    name: "John1",
    age: 20,
    surname: "Johnson",
  },
  {
    name: "Mary",
  },
  {
    name: "Mike",
  },
  {
    name: "John",
  },
];

const findUser = users.find((user) => user.name === "John");

console.log(findUser);
