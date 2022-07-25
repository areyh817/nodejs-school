const os = require('os')
console.log('운영체제 정보 ----------------')
console.log('os.hostname() : ', os.hostname);

console.log('경로 ----------------')
console.log('os.homedir() : ', os.homedir);
console.log('os.tmpdir() : ', os.tmpdir);

console.log('메모리 정보 ---------------')
console.log('os.freemem() : ', os.freemem);
console.log('os.totalmem() : ', os.totalmem);