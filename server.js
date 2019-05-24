
const http = require("http");
const fs = require("fs");
const logger = require("./customLogger/logger");

const port = 8080;

const app = http.createServer((request, response) => {

  response.setHeader('X-Powered-By', 'Potatos and Vodka');
  
  this.logging = new logger();

  this.handler = require("./handleResponse/handler");

  this.logging.log(`Incoming request:\nURL: ${ request.url }\nType: ${ request.method }\n`);

  let urlPath = request.url.split("/");

  let bodyBuffer = [];

  request.on('error', (err) => {

    this.logging.error(err.message);
    
  }).on('data', (chunk) => {
    
    bodyBuffer.push(chunk);

  }).on('end', () => {

    this.body = JSON.parse(bodyBuffer.length ? Buffer.concat(bodyBuffer).toString() : "{}");

    switch(urlPath[1]) {
      case "user":
        (require('./users/routes'))(request, response, this);
        break;
      case "test":
        (require("./testing/testing"))(request, response, this);
        break;
      default:

        switch(request.method) {

          case "GET":
            this.handler(
              response,
              JSON.stringify({
                location: "root",
                method: "GET"
              }),
              200,
              {
                "Content-Type": "application/json"
              }
            );
            break;
    
          case "POST":
            this.handler(
              response,
              JSON.stringify({
                ...this.body,
                yougot: "loopbacked!",
                method: "POST"
              }),
              200,
              {
                "Content-Type": "application/json"
              }
            );
            break;
          
          default:
            this.handler(
              response,
              JSON.stringify({
                "status": "Your method is not supported here"
              }),
              200,
              {
                "Content-Type": "application/json"
              }
            );
            break;
        }
    }
  })
  
})

app.listen(port, () => {
  console.log(`App is listening on port: ${ port }\n`)
});