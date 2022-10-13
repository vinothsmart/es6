const computers = [
  { name: "Apple", ram: 24 },
  { name: "Compaq", ram: 4 },
  { name: "Acer", ram: 32 },
];

let allComputersCanRunProgram = true;

let onlySomeComputersCanRunProgram = false;

for (let i = 0; i < computers.length; i++) {
  const computer = computers[i];

  if (computer.ram < 16) {
    allComputersCanRunProgram = false;
  } else {
    onlySomeComputersCanRunProgram = true;
  }
}

console.log(allComputersCanRunProgram);
console.log(onlySomeComputersCanRunProgram);

const resultEven = computers.every((computer) => computer.ram > 16);

console.log(resultEven);
