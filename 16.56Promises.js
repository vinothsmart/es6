// three states of promises
// 1. unresolved or pending
// 2. resolved or fulfilled
// 3. rejected or failed
// console.log(promise);

const promise = new Promise((resolve, reject) => {
  //   reject();
  //   setTimeout(() => {
  //     resolve();
  //   }, 3000);
  var request = new XMLHttpRequest();
  // make a request
  request.onload = () => {
    resolve();
  };
});

promise
  .then(() => console.log("finally finished!"))
  .then(() => console.log("I was also ran!"))
  .catch(() => console.log("uh oh!!"));
