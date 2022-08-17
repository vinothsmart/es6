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

var user;
for (var i = 0; i < users.length; i++) {
  if (users[i].name === "John") {
    user = users[i];
    break;
  }
}

console.log(user);
