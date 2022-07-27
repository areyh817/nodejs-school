var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response) {
    var url = request.url;
    if(request.url == '/') {
        url = '/index1.html';
    }

    if(request.url == '/other.html') {
        return response.writeHead(404);
    }

    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));
});

server.listen(4444, () => {
    console.log('4444번 포트에서 대기 중 ...')
})