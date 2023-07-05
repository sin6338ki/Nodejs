// EXPRESS GET, POST 방식 데이터 요청하고 응답하기
const express = require("express");
const app = express();

//body 파싱
//post 요청 데이터는 body에 데이터가 있음
//데이터를 가지고 오려면 body를 파싱해줘야 함
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/Ex04form.html");
});

//get방식으로 요청받았을 때 - 파라미터는 신경 안써도 됨
app.get("/get", (req, res) => {
  //QueryString : ?id=test1&pw=test2
  //req.query -> 객체 타입으로 넘어옴
  console.log(req.query.id);
  console.log(req.query.pw);
  res.send("get 완료!");
});

//localhost:8888/login/test1/test2 -> 경로에 데이터 포함하는 방법
app.get("/get/:id/:pw", (req, res) => {
  console.log(req.params.id);
  console.log(req.params.pw);
  res.send("get 완료!");
});

//post방식으로 요청받았을 때
app.post("/post", (req, res) => {
  console.log(req.body.id); //undefined >> body파싱!
  console.log(req.body.pw);
  res.send("post 완료!");
});

app.set("port", process.env.PORT || 8888);

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 서버연결 기다리는중...");
});
