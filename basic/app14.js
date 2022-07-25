const url = require('url')

const {URL} = url;
const myURL = new URL('https://www.e-mirim.hs.kr/main.do');
console.log('new URL() : ', myURL);

console.log('-------------------------');
const parsedUrl = url.parse('https://www.e-mirim.hs.kr/schoollife/food.do');
console.log('url.parse() : ', parsedUrl);