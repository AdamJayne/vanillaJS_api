
const Users = require("./userModel");

let users = new Users();

function login(username, password) {

  console.log(username, password);

  return {
    result: "User Logged In!",
    token: Math.floor(Math.random() * 1234558483)
  };
}

function createUser(name, age, username, password) {

  console.log(name, age, username, password);

  return {
    result: "User created!",
    token: Math.floor(Math.random() * 123552334)
  }

}

function getMe(username) {

  console.log(username);

  return {
    name: "TEST ACCOUNT", 
    age: 9001
  }
}



module.exports = {
  createUser,
  login,
  getMe
}