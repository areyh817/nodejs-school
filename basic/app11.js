const timeout = setTimeout(() => {
    console.log('1.5초 후 실행');
}, 1500);

const interval = setInterval(() => {
    console.log('1초마다 실행');
}, 1000);
/*
setTimeout(() => {
    clearInterval(interval); // 타이머 취소
})
*/