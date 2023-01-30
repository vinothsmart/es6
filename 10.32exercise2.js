// const profile = {
//   name: "Alex",
// };

const profile = {
  name: "Alex",
  getName: function () {
    return profile.name;
  },
};

console.log(profile.getName());
