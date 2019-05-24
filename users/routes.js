
const stringify = JSON.stringify;

const userService = require("./userService");

module.exports = function(request, response, app){

  let routes = request.url.split("/");

  // Should I handle getting the body here?

  switch(routes[2]) {
    case "register":
      if(request.method == "POST") {
        register();
      } else {
        notAllowed();
      }
      break;
    case "login":
      if(request.method == "POST") {
        loging();
      } else {
        notAllowed();
      }
      break;
    case "me":
      me();
      break
    default:
      app.handler(
        response,
        stringify({
          "where": "Are you going somewhere?"
        }),
        200,
        {
          "Content-Type": "application/json"
        }
      )
      break;
  }

  function register() {
    let { name, age, username, password } = app.body;
    let result = userService.createUser(name, age, username, password);
    app.handler(
      response,
      stringify(result),
      200,
      {
        "Content-Type": "application/json"
      }
    )
  }

  function login() {
    let { username, password } = app.body;
    let result = userService.login(username, password);
    app.handler(
      response,
      stringify(result),
      200,
      {
        "Content-Type": "application/json"
      }
    )
  }

  function me() {
    let { username } = app.body;
    let result = userService.getMe(username);
    app.handler(
      response,
      stringify(result),
      200,
      {
        "Content-Type": "application/json"
      }
    )
  }

  function notAllowed() {
    app.handler(
      response,
      stringify({
        "status": "Method Not Allowed"
      }),
      405,
      {
        "Content-Type": "application/json"
      }
    );
  }

}
