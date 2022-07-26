const fs = require('fs');

setInterval(() => {
    // unlik() = 파일삭제
    fs.unlink('./sam1.txt', (err) => {
        if(err){
            console.error(err)
        }
    });
}, 500)