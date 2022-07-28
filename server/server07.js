var http = require('http');

http.createServer(function (request, response){
    response.writeHead(302, {'Location' : 'https://www.e-mirim.hs.kr/main.do'});
    response.end();
})

.listen(4444, function(){
    console.log('4444번 포트에서 서버 대기 중입니다.');
})