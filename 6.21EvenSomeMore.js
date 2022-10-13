function filed(value) {
  this.value = value;
}
filed.prototype.validate = function () {
  return this.value.length > 0;
};

const username = new filed("2Cool");
const password = new filed("my_password");

console.log(username.validate() && password.validate());
