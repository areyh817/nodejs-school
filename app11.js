/*const fs = require('fs');
fs.readFile('./basic/app11.js', function(err, data)){
    if(err){
        throw err;
    }
    console.log(data.toString());
}*/

/*const fs = require('fs');
fs.readFile('./basic/app11.js', function(err, data){
    if(err){
        throw err;
    }
    console.log(data.toString());
})*/

const fs = require('fs');
fs.readFile('./app11.js', (err, data) => {
    if(err){
        console.log('error')
    }
    console.log(data.toString());
});
