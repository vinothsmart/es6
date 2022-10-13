function filed(value) {
  this.value = value;
}
filed.prototype.validate = function () {
  return this.value.length > 0;
};

const username = new filed("2Cool");
const password = new filed("my_password");
const birthday = new filed("13/06/1990");

// console.log(username.validate() && password.validate());

const fields = [username, password, birthday];
const isFormValid = fields.every((field) => field.validate());

console.log(isFormValid);
