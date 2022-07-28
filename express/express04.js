var express = require('express');
var http = require('http');
// 익스프레스 시작
var app = express();
app.set('port', process.env.port || 4444);

// 미들웨어 사용
app.use(function(req, res, next) {
    console.log('첫 번째 미들웨어\n');
    // 데이터를 주고 받을 수 있게 get, post 방식사용
    var useAgent = req.header('User-Agent');
    var paramName = req.query.name;
    var paramTel = req.query.tel;

    res.send('<h2>서버에서 응답 User-Agent -> </h2>' + useAgent + '<h2>paramName -> ' + paramName + '</h2>' + '<h2>paramTel -> ' + paramTel + '</h2>');

    // 다른 곳으로 사이트 이동
    res.redirect('http://www.gogle.com')
    req.user = 'areyh';
    req.next();
    /*res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    res.end('<h1>서버에서 응답한 결과 : ' + req.user + '</h1>')*/
});

// 두 번째 미들웨어 사용 _json 형태로 정의해서 send()로 가져온다.
app.use(function(req, res, next){
    console.log('두 번째 미들웨어_send()')
    // json 형태로 정의
    var student = {name : '홍길동', tel : '010-123-4568'};
    res.send(student);
    var studentStr = JSON.stringify(student)
    // res.send(studentStr);
    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'})
    res.end(studentStr);

});

var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('익스프레스 웹서버 실행 : ' + app.get('port'));
})
