
module.exports = function(response, body, status, headers) {
  response.writeHead(status, headers);
  response.write(body);
  response.end();
}
