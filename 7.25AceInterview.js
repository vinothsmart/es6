const balancedParams = (string) => {
  return !string.split("").reduce((acc, char) => {
    if (acc < 0) {
      return acc;
    }
    if (char === "(") {
      return ++acc;
    }
    if (char === ")") {
      return --acc;
    }
    return acc;
  }, 0);
};

console.log(balancedParams(")("));
