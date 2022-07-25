/*function run(){
    console.log('3초후 실행')
}
console.log('시작')
setTimeout(run, 3000)
console.log('끝')*/


// 동기식 방식
/*const fs = require('fs');
fs.readFile('./basic/app12.js', 'utf-8');
console.log('파일 불러오기 완료');*/

// 파일 입출력은 비동기식 방식으로 읽는다.
const fs = require('fs');
fs.readFile('./test.txt', 'utf-8', (err, data) => { // ./app12.js
    console.log(data.toString());
    console.log('파일 오픈');
});
console.log('다른 작업 중 .. .')