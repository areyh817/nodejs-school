var http = require('http')
var fs = require('fs');
var url = require('url');

http.createServer(function (req, res){
    var pathname = url.parse(req.url).pathname;
    if(pathname == '/') {
        fs.readFile('index1.html', function(err, data){
            res.writeHead(200, {'Content-Type' : 'text/html'})
            res.end(data);
        })
    } else if(pathname == '/1') {
        fs.readFile('1.html', function(err, data){
            res.writeHead(200, {'Content-Type' : 'text/html'})
            res.end(data);
        })
    } else if(pathname == '/2') {
        fs.readFile('2.html', function(err, data){
            res.writeHead(200, {'Content-Type' : 'text/html'})
            res.end(data);
        })
    } else if(pathname == '/3') {
        fs.readFile('3.html', function(err, data){
            res.writeHead(200, {'Content-Type' : 'text/html'})
            res.end(data);
        })
    }
})
.listen(4444, function(){
    console.log('4444번 포트에서 대기 중 ....')
})