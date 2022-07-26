// 모듈을 추출합니다.
var fs = require('fs');
var http = require('http');

// 4444번 포트에 서버를 생성하고 실행합니다.
http.createServer(function (request, response){
    // 이미지 파일을 읽습니다.
    fs.readFile('./loopy.jpg', function(error, data){
        response.writeHead(200, {'Content-Type' : 'image/jpeg'});
        response.end(data);
    });
})

.listen(4444, function(){
    console.log('4444 포트에서 서버 대기 중입니다 ...')
})