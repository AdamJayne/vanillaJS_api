
module.exports = function(request, response, app) {

  app.handler(
    response,
    JSON.stringify({
      "status": "Hello from the test route!"
    }),
    200,
    {
      "Content-Type": "application/json"
    }
  )

}
