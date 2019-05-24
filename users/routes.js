module.exports = function(request, response, app){

  app.logging.log(`Incoming Request: ${ request.url }`);
  try {
    response.writeHead(200, { "Content-Type": "application-json" });
    response.write(JSON.stringify({
      route: "users"
    }));
    response.end();
  } catch (e) {
    app.logging.error(e);
  }

}