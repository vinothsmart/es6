const profile = {
  title: "Engineer",
  department: "Engineering",
};

function isEngineer(profile) {
  var title = profile.title;
  var department = profile.department;
  return title === "Engineer" && department === "Engineering";
}

console.log(isEngineer(profile));

function isEngineer2({ title, department }) {
  return title === "Engineer" && department === "Engineering";
}

console.log(isEngineer2(profile));
