const express = require("express");

//app 인스턴스 생성
const app = express();

//get 요청 받고 응답하기
// - app.get('요청경로', ()=>{})
app.get("/", (req, res, next) => {
  //text 내보낼 때 : send()
  res.send("Hello Express!");
  //미들웨어 사용시 next를 붙여줘야 함(매개변수, 실행 모두)
  next();
});

//응답후 실행할 미들웨어(함수)
//기본적으로 모든 미들웨어는 사용자의 응답, 요청을 다루므로 req, res 매개변수로 지정
const myLogger = function (req, res) {
  //로그 출력 미들웨어
  console.log("LOGGED");
};

//app에 미들웨어 붙이기 : app.use()
app.use(myLogger);

//서버 열기 - 콜백함수 사용
//포트번호 지정, 서버 열렸을 때 실행할 함수 정의
app.listen(8888, () => {
  console.log("8888 포트에서 서버 연결 대기중...");
});
