var http = require('http');
var fs= require('fs');

http.createServer(function(req,res){
    if (req.url === '/api') {
        res.writeHead(200, {'Content-Type' : 'application/json'});
        var obj= {
            name: 'Fidel',
            lastname: 'GB'
        };
        res.end(JSON.stringify(obj));   
    }else if (req.url==='/'){
        fs.createReadStream(__dirname + "/index.html").pipe(res);
    }else{
        res.writeHead(404);
        fs.createReadStream(__dirname + "/404.html").pipe(res);
    }
}).listen(8080, '127.0.0.1');