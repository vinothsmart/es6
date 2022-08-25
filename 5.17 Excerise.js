const users = [
  {
    id: 1,
    admin: false,
  },
  {
    id: 2,
    admin: false,
  },
  {
    id: 3,
    admin: true,
  },
];

const findAdmin = users.find((user) => user.admin);

console.log(findAdmin);
