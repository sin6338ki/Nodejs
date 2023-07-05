const express = require("express");
const app = express();

app.get("/", (req, res) => {
  //   res.send("Hello Express!!"); -> 테스트 응답
  //** 응답은 무조건 1번만 일어남!
  //sendFile(경로) : 파일 응답
  //__dirname : 현재 위치를 불러오는 것 (Ex06Express 폴더 안)
  //            -> 정적 리소스 (화면 구성 ex. html, css, js, img) 위치 지정
  res.sendFile(__dirname + "/Ex02.html");
});

//이벤트 리스너를 붙여서 서버 열기
//set(변수명, 실저장데이터) : 값 설정(저장)
//process.env.PORT || 8888 : 기본적으로 사용하고 있는 port번호가 있다면 해당 포트 사용, 아니라면 8888 사용
app.set("port", process.env.PORT || 8888);
app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 서버 연결 기다리는중...");
});
