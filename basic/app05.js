// 시간 측정을 시작합니다.
console.time('hyera')
let output = 0

for(let i = 0; i <= 100; i++){
    output += i;
}

process.exit(); // 프로그램 종료
console.log('Result : ', output)
// 시간측정을 종료합니다.
console.timeEnd('hyera')