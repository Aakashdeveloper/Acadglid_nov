let http = require('http');

let server = http.createServer(function(req,res){
    res.write("<h1>Welcome to node Js</h1>")
    res.end()
});

server.listen(2000);