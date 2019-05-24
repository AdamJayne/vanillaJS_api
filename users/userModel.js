
class User {

  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.username = username;
    this.password = password;
  }

}

class Users { 
  constructor() {
    this.users = [];
  }

  userLogin(username, password) {
    let found = this.users.forEach(user => {
      if(username == user.username && password == user.password){
        return {
          status: 200,
          message: "User found",
          token: "ABCDEFG"
        }
      }
    })
    console.log(found);
    return found ? found : {
      status: 404,
      message: "User not found"
    }
  }
   
  userRegister(name, age, username, password) {
    let newUser = new User(name, age, username, password);
    this.users.push(newUser);
  }
}

module.exports = Users;