// 절댓값 원의 면적을 구하는 모듈을 만들기
/*circleArea = function(num){
    return num*num*Math.PI;
}*/
/*var result = require('./module01');
console.log(result.circleArea(10))*/


exports.circleArea = function(num){
    return num * num * Math.PI;
}

// 절댓값을 구한다.
exports.abs = function(num){
    if(num > 0)
    return num;
    else return -num;
}

module.exports = {abs, circleArea};