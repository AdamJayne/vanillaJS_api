
const http = require("http");

const app = http.createServer((request, response) => {

  if(request.url == "/user/register") {
    (require('./users/routes'))(request, response);
  } else {
    response.end("TESTING")
  }
  
})

app.listen(3000);

console.log('App listening on port 3000');