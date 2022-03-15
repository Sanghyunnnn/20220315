var express=require('express');
var app=express();
var bodyParser=require('body-parser');

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());



//nodeJs에서는 객체 형식의 데이터를 json데이터로 변환하여 클라이언트로 전송한다..


app.get('/',function(req,res){
    //res.send("Hello");
    res.sendFile(__dirname+'/public/index.html');
});


app.post('/result',function(req,res)
{
    var result={answer : req.body.result};
    res.json(result);
});

app.listen(3000,function(){


    console.log("server ON -- 3000");
});