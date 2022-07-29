var express = require('express');
var http = require('http')
var static = require('serve-static') // 경로 static을 위한 미들웨어
var path = require('path')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
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

// static 미들웨어 사용 media추가
app.use('/media', static(path.join(__dirname,'media')));
// 세션 사용하기
app.use(expressSession({
    secret : 'meLLong',
    resave : true,
    saveUninitialized : true 
}));

app.use('/', router);

// 1. 로그인 라우터 (세션추가)
router.route('/process/login').post(function(req, res) {
    console.log('/process/login 라우팅 함수 호출')
    var paramId = req.body.id || req.query.id;
    var paramPw = req.body.password || req.query.password;

    console.log('요청파라메터 : ' + paramId + " : " + paramPw)
    if(req.session.user){
        console.log('이미 로그인 상태')
        res.redirect('/media/score.html')
    } else {
        // 세션저장
        req.session.user = {
            id : paramId,
            name : '조혜라',
        };

        res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
        res.write('<h1>로그인 성공</h1>')
        res.write('<h1>id : ' + paramId + '</h1>')
        res.write('<h1>pw : ' + paramPw + '</h1>')
        res.write('<a href="/process/score"> 성적확인하기 </a>')
        res.end();
    }
})

// 2 로그아웃 라우터 - 세션삭제
router.route('/process/logout').get(function(req, res){
    console.log('/process/logout 라우팅 함수에서 호출됨')
    
    if(req.session.user) {  // 로그인 상태
        console.log('로그아웃 합니다.')
        req.session.destroy(function(error){
            if(err){
                throw err;
            }
            console.log('세션을 삭제하고 로그아웃 되었습니다.')
            res.redirect('/media/login2.html')
        })
    } else {
        console.log('아직 로그인 되어 있지 않습니다.')
        res.redirect('/media/login2.html')
    }
})

// 3. 점수정보 라우터 사용, 라우터를 사용할 때는 use 미들웨어를 사용안 함
router.route('/process/score/').get(function(req, res){
    console.log('/process/score/ 라우팅 함수 호출됨')

    if(req.session.user){
        res.redirect('/media/score.html')
    } else {
        res.redirect('/media/login2.html')
    }
})
/*
router.route('/process/setUserCookie').get(function(req, res){
    console.log('/process/setUserCookie 라우팅 함수 호출');
    res.cookie('user',{
        id:'hyera',
        name: '조혜라'
    });
res.redirect('/process/showCookie');

});*/

const multer = require("multer");

var storage = multer.diskStorage({
    destination : function(req, file, callback){
        callback(null, 'upload')
    },
    filename : function(req, file, callback){
        callback(null, file.originalname + Date.now())
    }
});

var upload = multer({
    storage : storage,
    limits : {
        files : 10,
        fileSize : 1024 * 1024 * 1024
    }
});


// 파일 업로드 라우팅 함수 - 로그인 후 세션 저장함
router.route('/process/photo').post(upload.array('photo', 1), function(req, res){
    console.log('/process/photo 호출됨')
    var files = req.files;

    console.log('======== 업로드 된 파일 =========')
    if(files.length > 0) {
        console.dir(files[0])
    } else {
        console.log('파일이 없습니다.')
    }

    var originalname = '';
    var filename = '';
    var mimetype = '';
    var size = 0;

    if(Array.isArray(files)){
        for(var i = 0; i < files.length; i++){
            originalname = files[i].originalname;
            filename = files[i].filename;
            mimetype = files[i].mimetype;
            size = files[i].size;
        }
    }

    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
    res.write('<h1>파일 업로드 성공</h1>');
    res.write("<p>원본파일 : " + originalname + "</p>");
    res.write("<p>저장파일 : " + filename + "</p>");
    res.end();
}
)

var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('익스프레스 웹서버 실행 : ' + app.get('port'));
})