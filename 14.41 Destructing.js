const savedFiled = {
  extension: "jpg",
  name: "repost",
  size: 14040,
};

function fileSummary(file) {
  return `The file ${file.name}.${file.extension} is of size ${file.size}`;
}

console.log(fileSummary(savedFiled));
