const ddd = require('./module01');
var plus = ddd.aaa(2, 10);
console.log(plus);
var sub = ddd.bbb(10, 2);
console.log(sub);
console.log(module.exports == exports);