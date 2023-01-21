const getMessage = () => {
  const year = new Date().getFullYear();
  return `This year is ${year}`;
};

console.log(getMessage());
