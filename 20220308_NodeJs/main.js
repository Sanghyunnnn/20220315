var express=require('express');

var app=express();

var bodyParser=require('body-parser');

var main=require('./router/router_modules');




app.use('/main',main);  
//router에 대한 정의 
// '/main'으로 들어 왓을 경우 main라우터를 써!!!

app.use('/main/fform',main);


app.use(express.static('public')); //public안에 있는 파일들을 static으로..  -- static폴더 안에 있는 것들은 요청 처리 해줄 필요 없음.. ( 자동으로 가능!! )

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

app.set('view engine','ejs');   //view engine은 ejs야!!


app.listen(3000,function(){
    console.log("sucess")
});

//url 라우팅//
app.get('/',function(req,res)  //get요청이 왔을때..
{
    res.sendFile(__dirname+"/public/index.html")//원래 모든 절대 경로를 전부다 기입 해 주어야 함
    //클라이언트에게 해당 파일을 보냄.
});
//url 라우팅//


app.post('/email_post',function(req,res)   //form action과 이름 같게 해줘야..( action url)
{

    console.log(req.body.email);

    //Get : req.param
    //res.send("<h1>Welcome! </h1>"+req.body.email);
    res.render('email.ejs',{'email':req.body.email});  //ejs사용(res.render)..  email.ejs에다가 해당 객체를 넣어줌 ( 해당 ejs파일의 변수를 해당 객체의 키의 값으로 전부 치환해줌.!! )
});

app.post('/ajax_send_email',function(req,res)   //form action과 이름 같게 해줘야..( action url)
{

    console.log(req.body.email);

    var responseData={'result':'ok','email':req.body.email};  
    res.json(responseData);  //서버-->클라이언트로 보냄 ( JSON방식으로.. )

});
//POST로 데이터 받앗을때.



//서버로 데이터 보낼때는 post방식 사용!!


//모든 요청에 대해서 처리를 일일히 해야함..