const savedFiled = {
  extension: "jpg",
  name: "repost",
  size: 14040,
};

function fileSummary({ name, extension, size }, { color }) {
  return `${color} The file ${name}.${extension} is of size ${size}`;
}

console.log(
  fileSummary(savedFiled, {
    color: "red",
  })
);
