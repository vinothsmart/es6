const count = (targetString) => {
  const characters = ["a", "e", "i", "o", "u"];
  let number = 0;
  for (let i = 0; i < targetString.length; i++) {
    if (characters.includes(targetString[i])) {
      number++;
    }
  }
  return number;
};

const check = count("aeiobzxceiaipbiox");

console.log(check);
