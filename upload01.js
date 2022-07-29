const multer = require("multer");

var storage = multer.diskStorage({
    destination : function(req, file, callbak){
        cancelIdleCallback(null, 'upload')
    },
    filename : function(req, file, callback){
        callback(null, file.originalname + Date.now())
    }
});

var upload = multer({
    stroage : storage,
    limits : {
        files : 10,
        fileSize : 1024 * 1024 * 1024
    }
});

