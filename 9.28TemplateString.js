const getMessage = () => {
  const year = new Date().getFullYear();
  return `This year is ${year - 1}`;
};

console.log(getMessage());
