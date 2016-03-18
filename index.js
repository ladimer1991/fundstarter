var http = require('http');

var file = require('fs');
var requestListener = function (req, res) {
   res.writeHead(200);
  
   file.stat('ladidadi.html', function (err, stats){
      if(err){
         return console.log(err);
      }
      file.open('ladidadi.html', 'r', function (err, fd){
          if(err){
             return console.log(err);
          }
          file.read(fd, new Buffer(stats.size), 0, stats.size, 0, function (err, bytesRead, buffer){
              if(err){
                  return console.log(err);
              }
              res.end(buffer.toString('utf8'));
          });
      });
   });     
}

var server = http.createServer(requestListener);
server.listen(process.env.PORT || 8080);
