var express = require('express'); // express 모듈을 express 변수를 통해 제어
var app = express();
app.use(express.static('sub'));//정적인 파일이 위치할 디렉토리
app.get('/', function(req, res){
  res.send('Hello home page');
}); // 사용자가 홈으로 접속하면 함수가 실행되도록 함
app.get('/route', function(req, res){
  res.send('Hello Router, <img src = "/route.png">');
})
app.get('/login', function(req, res){
  res.send('<h1>Login please</h1>');
}); // ''은 경로이고 경로로 접속했을때 res.send()가 메세지를 띄워줌
app.listen(3000, function(){
  console.log('Connected 3000 port!');
}); //port번호 3000 설정
