function signUp({ username, password, email, dateOfBirth, city }) {
  // create new user
}

// other code

// signUp("myname", "mypassword", "demo@gmail.com", "1/1/1990", "New York");

// after destructing
const user = {
  username: "myname",
  password: "mypassword",
  email: "demo@gmail.com",
  dateOfBirth: "1/1/1990",
  city: "New York",
};

signUp(user);
