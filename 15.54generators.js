const testingTeam = {
  lead: "Amanda",
  tester: "Bill",
};

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: "Engineering",
  lead: "Jill",
  manager: "Alex",
  engineer: "Dave",
};

function* TeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
  // yield team.testingTeam.lead;
  // yield team.testingTeam.tester;
  // with generator delegation same output as above
  const testingTeamGenerator = TestingTeamIterator(team.testingTeam);
  yield* testingTeamGenerator;
}

function* TestingTeamIterator(team) {
  yield team.lead;
  yield team.tester;
}

const names = [];
for (let name of TeamIterator(engineeringTeam)) {
  names.push(name);
}

console.log(names); // ["Jill", "Alex", "Dave"] const testingTeamGenerator = TestingTeamIterator(team.testingTeam); after that [ 'Jill', 'Alex', 'Dave', 'Amanda', 'Bill' ]
