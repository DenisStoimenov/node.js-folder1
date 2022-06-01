var http = require('http');
var { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();
console.log(eventEmitter);

eventEmitter.on('/', (res) => {
    // console.log('yum' + food);
    console.log('I ate food');
    res.write('steak yum');
    res.end();
});

eventEmitter.on('/pizza', (res) => {
    // console.log('yum' + food);
    res.write('pizza yum');
    res.end();
})

http.createServer(function (req, res) {
    // res.writeHead(200,{'Content-Type' : 'text/html'});
    // res.write('<h1>Hello backend world</h1>');
    // console.log(req.url);
    // res.end();
    eventEmitter.emit(req.url, res);

    // if (req.url === '/') {
    //     res.write('steak yummy');
    //     return res.end();
    // }
    // if (req.url === '/pizza') {
    //     res.write('pizza yummy');
    //     return res.end();


    // }
    console.log('Hello darkness my old friend')
}).listen(8080);

console.log('Listening on port 8080...');
