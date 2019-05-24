
const http = require("http");
const logger = require("./customLogger/logger");

const app = http.createServer((request, response) => {

  this.logging = new logger();

  if(request.url == "/user/register") {
    (require('./users/routes'))(request, response, this);
  } else {
    response.end("TESTING")
  }
  
})

app.listen(3000);

console.log('App listening on port 3000');