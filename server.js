var http = require("http");
var port = 8080;

var server = http.createServer(function(request, Response) {
  response.end("hello world");
});

server.listen(port, function() {
  console.log(`listing on port ${port}`);
});
