var http = require('http');
const users= [];

http.createServer(function(request, response) {
    if(request.url == '/users' && request.method == 'post'){
        const user = request.body;
        users.push({ 
        name: user.name,
        age: user.name,
        
        });
    }
    response.write('Successfully registered user ',users);
    response.end();
}).listen(8080);