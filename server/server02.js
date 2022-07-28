const http = require('http')
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html;charset=tf-8'});
    res.write('<h1>Hello node.js</h1>');
    res.end('<p>Hello Server</p>');
})

.listen(4444, () => {
    console.log('4444번 포트에서 서버 대기 중...')
})