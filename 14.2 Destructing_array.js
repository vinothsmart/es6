const compaines = ["Google", "Facebook", "Uber"];

const [name1, name2, name3, name4] = compaines;
const firstCompany = compaines[0];

console.log(name1);
console.log(name2);
console.log(name3);
console.log(name4);

console.log(firstCompany);

const { length } = compaines;

console.log(length);

const [name, ...rest] = compaines;

console.log(rest);

console.log(compaines[1]);
