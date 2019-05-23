module.exports = function(request, response){
  response.writeHead(200, { "Content-Type": "application-json" });
  response.write(JSON.stringify({
    route: "users"
  }));
  response.end();
}