
const Users = require("./userModel");

let users = new Users();
function createUser(data) {

  let {name, age, username, password} = data;

  let status = users.userRegister(name, age, username, password);

  return status
}

