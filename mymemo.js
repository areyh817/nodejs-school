var express = require('express');
var http = require('http')
var static = require('serve-static') // 경로 static을 위한 미들웨어
var path = require('path')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
const ejs = require('ejs')
var router = express.Router();

// 세션 추가
var expressSession = require('express-session')

// 익스프레스 시작
var app = express();

// 바디파서 미들웨어 시작
app.set('port', process.env.port || 4444)
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(cookieParser())

// ejs 사용하기
app.set('view engine', 'ejs');

// static 미들웨어 사용 media추가
app.use('/media', static(path.join(__dirname,'media')));
// 세션 사용하기
app.use(expressSession({
    secret : 'meLLong',
    resave : true,
    saveUninitialized : true 
}));

app.use('/', router);

// 1. 메모 라우터 (메모 추가하기 -> 세션에)
router.route('/process/memo').post(function(req, res){
    console.log('/process/memo 라우팅 함수 호출')
    var paramWriter = req.body.writer || req.query.writer;
    var paramWriterDate = req.body.datewrite || req.query.datewrite;
    var paramContentwrite = req.body.contentwrite || req.query.contentwrite;

    console.log('요청 파라미터 : ' + paramWriter + ' ' + paramWriterDate + ' ' + paramContentwrite);
    // session 저장
    req.session.memo = {
        writer : paramWriter,
        datewrite : paramWriterDate,
        contentwrite : paramContentwrite,
    };

    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
    res.write('<h1>메모가 잘 저장 되었습니다.</h1>')
    res.write('<h2>작성자 : ' + paramWriter + '</h2>')
    res.write('<h2>작성일시 : ' + paramWriterDate + '</h2>')
    res.write('<h2>내용 : ' + paramContentwrite + '</h2>')
    res.write('<button> <a href="/media/memo.html">다시작성</a> </button>')
    res.end();

})

var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('익스프레스 웹서버 실행 : ' + app.get('port'));
})