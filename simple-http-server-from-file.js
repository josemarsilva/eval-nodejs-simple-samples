var http = require('http');
var fs = require('fs')
var contents = fs.readFileSync('simple-http-server-from-file.html');

http.createServer(function(req,res){
    res.end(contents);
}).listen(3000);
