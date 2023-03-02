function User(id) {
  this.id = id;
}

function generateId() {
  return Math.random() * 99999999;
}

function createAdminUser(user) {
  user.admin = true;
  return user;
}

createAdminUser(new User(generateId()));
