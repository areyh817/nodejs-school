console.log("hello world");
console.time('전체시간');
let sum = 0;

for(i = 0; i < 10000; i++){
    sum += i;
}

console.timeEnd('전체시간') // console.time()가 리터럴이 같아야 한다.