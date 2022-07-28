var express = require('express');
var http = require('http');
var static = require('serve-static');   // 경로 static을 위한 미들웨어
var path = require('path');
var bodyParser = require('body-parser');

// 익스프레스 시작
var app = express();
app.set('port', process.env.port || 4444);
// static 미들웨어 사용
app.use(static(path.join(__dirname, 'media')));

// 바디파서 미들웨어 시작
// 바디파서는 post 방식의 데이터를 주고 받을 수 있다.
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

// 미들웨어 사용
app.use(function(req, res, next) {
    console.log('첫 번째 미들웨어\n');
    // 데이터를 주고 받을 수 있게 get, post 방식 사용
    var useAgent = req.header('User-Agent')
    var paramPw = req.body.password;
    var paramId = req.body.id;

    res.send('<h2>서버에서 응답 User-Agent -> </h2>' + useAgent + '<h2>paramId -> ' + paramId + '</h2>' + '<h2>paramPw -> ' + paramPw + '</h2>');
});

var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('익스프레스 웹서버 실행 : ' + app.get('port'));
})
