var express=require('express');
var app=express();
var path=require('path');

var router=express.Router();



router.get('/',function(req,res){
    console.log("router success!!")

    res.sendFile(path.join(__dirname,'../public/index.html'));
});


router.get


module.exports=router;




