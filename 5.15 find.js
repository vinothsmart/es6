const users = [
  {
    name: "John",
  },
  {
    name: "Mary",
  },
  {
    name: "Mike",
  },
];

const findUser = users.find((user) => user.name === "John");

console.log(findUser);
