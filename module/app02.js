const{odd, even} = require('./module01')

// 문자열 길이가 짝수인지 홀수인지
function checkString(str){
    if(str.length % 2){
        return odd;
    }
    return even;
}

console.log(checkString('hello'));
console.log(checkString('hi'));