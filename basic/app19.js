const fs = require('fs'); // 비동기식 파일 읽기
console.log('시작');
fs.readFile('./sam.txt', (err, data) => {
    if(err){
        throw err;
    }

    console.log('1번', data.toString());
});

fs.readFile('./sam.txt', (err, data) => {
    if(err){
        throw err;
    }

    console.log('2번', data.toString());
});

fs.readFile('./sam.txt', (err, data) => {
    if(err){
        throw err;
    }

    console.log('3번', data.toString())
});

console.log('끝')
