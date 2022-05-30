var http = require('http');
var myCustomDateModule = require('./firstmodule');


http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello backendworld</h1>'+ myCustomDateModule.myCustomDateTime());
    res.end();
}).listen(8080);
