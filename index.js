var http = require('http');

var file = require('fs');
var requestListener = function (req, res) {
  res.writeHead(200);
  var info = file.readFileSync('ladidadi.html');
  res.end('info');
}

var server = http.createServer(requestListener);
server.listen(process.env.PORT || 8080);
