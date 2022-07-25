// querystring 모듈 = search 부분을 사용하기 쉽게 변환해서 만들어 준다.
const url = require('url')
const querystring = require('querystring');
const parseUrl = url.parse('https://blog.naver.com/pasdfg0909/222796231531')
const query = querystring.parse(parseUrl.query)
console.log('querystring.parse() : ', query);
console.log('querystring.stringify() : ', querystring.stringify(query));