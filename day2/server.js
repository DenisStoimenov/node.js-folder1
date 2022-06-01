var http = require('http');
var { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();
console.log(eventEmitter);

eventEmitter.on('eat', (food) => {
    console.log('yum' + food);
})

http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type' : 'text/html'});
    res.write('<h1>Hello backend world</h1>');
    console.log(req.url);
    res.end();
    eventEmitter.emit('eat', 'steak');
}).listen(8080);

console.log('Listening on port 8080...');
