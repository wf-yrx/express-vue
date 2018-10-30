let express = require('express');
let router = express.Router();

let operatorDB = require('../modules/operatorDB');

router.get('/find',function(req,res,next){
    operatorDB.find('xrr','xrrCollection','',(err,content)=>{
        if(!err){
            // console.log("444"+JSON.stringify(content));
            res.json(content);
        }
    })
});

module.exports = router;