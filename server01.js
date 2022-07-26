// 서버를 생성
var server = require('http').createServer();

// 서버 객체에서 이벤트 연결
server.on('request', function(code){
    console.log('Request on...')
})

server.on('connection', function(code){
    console.log('Conncetion on...')
})
// 서버를 실행
/* server.listen(4444, function(){
    console.log('4444번 포트에서 대기중 ...')
}); */

/*
var test = function(){
    server.close();
};

setTimeout(test, 5000); // 5초 후에 종료
*/  

// 서버를 실행
//server.listen(4444);
server.listen(4444, function(){
    console.log('4444 포트에서 대기 중 ... ')
})

