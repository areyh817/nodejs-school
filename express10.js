var express = require('express');
var http = require('http');
var static=require('serve-static');//경로 static을 위한 미들웨어
var path=require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();

// 익스프레스 시작
app.set('port', process.env.port || 4444);

//static 미들 웨어 사용
app.use(static(path.join(__dirname,'media')));

//바디파서 미들웨어 시작
//바디파서는 post 방식의 데이터를 주고 받을 수 있다
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser());//쿠키 설정

// 라우터 사용, 라우터를 사용할 때는 use 미들웨어를 사용안함
var router = express.Router();
router.route('/process/setUserCookie').get(function(req,res){
    console.log('/process/setUserCookie 라우팅 함수 호출');
    res.cookie('use',{
        id:'hong',
        name: '홍길동'
    });
res.redirect('/process/showCookie');

});
router.route('/process/showCookie').get(function(req,res){
    console.log('/process/showCookie 라우팅 함수 호출됨');
    res.send(req.cookies);
});
router.route('/process/login/:name').post(function(req,res){
    console.log('/process/login/:name 라우팅 함수에서 받음');
    var paramName = req.params.name; //url 파라메터이용하기
    var paramId =req.query.id||req.body.id;
    var paramPw = req.query.password||req.body.password;
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    res.write('<h1> 서버에서 로그인 </h1>');
    res.write('<div>'+paramName+'</div>');
    res.write('<div>'+paramId+'</div>');
    res.write('<div>'+paramPw+'</div>');
    res.end();
});
app.use('/',router);
app.all('*',function(req,res){
    res.status(404).send("<h1>요청하신 페이지가 없습니다.</h1>")
});
app.use('/',router);
//미들웨어 사용
app.use(function(req, res, next) {
    console.log('첫 번째 미들웨어\n');
    //데이터를 주고 받을 수 있게 get,post 방식 사용
    var useAgent = req.header('User-Agent');
    var paramPw = req.body.password;
    var paramId = req.body.id;


    res.send('<h2> 서버에서 응답 User-Agent -> </h2>'+useAgent+'<h2>paramId->'+paramId+'</h2>'
    +'<h2>paramPw->'+paramPw+'</h2>');
    req.user = 'areyh';
    req.next();
});

var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('익스프레스 웹서버 실행 : ' + app.get('port'));
})