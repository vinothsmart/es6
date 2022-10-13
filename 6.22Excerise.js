const users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true },
];

const hasSubmitted = users.every((user) => user.hasSubmitted);

console.log(hasSubmitted);
