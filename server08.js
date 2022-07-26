var http = require('http');
var fs = require('fs');
var url = require('url');

// 서버 생성
http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;    // url 변수선언
    // localhost:4444로 기본으로 들어가게 되면 index.html로 들어가게 됩니다.
    if(pathname == '/') {
        fs.readFile('index.html', function(err, data){
            // 응답을 합니다.
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.end(data);
        });
    } 
    // localhost:4444/other을 검색하면 other.html로 접속하게 됩니다. 
    else if(pathname == '/other') {
        fs.readFile('other.html', function (err, data){
            // 응답한다.
            res.writeHead(200, {'Content-type' : 'text/html'});
            res.end(data);
        });
    }
})
.listen(4444, function(){
    console.log('4444번 포트에서 대기 중 ....')
})