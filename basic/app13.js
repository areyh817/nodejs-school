const path = require('path')

const string = __filename;
console.log('파일명은 :',__filename);
console.log('분리기호:',path.sep);
console.log('환경변수 구분자:',path.delimiter);
console.log('----------------------------------');
console.log('폴더명:',path.dirname(string));
console.log('확장자명:',path.extname(string));
console.log('전체파일명:',path.basename(string));
console.log('----------------------------------');
console.log('절대경로(C:\\) : ', path.isAbsolute('C:\\'));
console.log('path.isAbsolute : ', path.isAbsolute('D:\\js_work'));
console.log('----------------------------------');
console.log('상대경로 : ', path.relative('d:\js_work', 'd:\\'));
console.log('상대경로 : ', path.relative('d:\js_work', 'd:\\js_work\\media'));