// 익스프레스 객체 생성
var app = express();

// 기본 포트를 app 객체에 속성으로 설정
app.set('port', process.env.PORT||3000);

// Express 서버 시작
http.createServer(app).listen(app.get('port'), function() {
    console.log('express를 실행')
})