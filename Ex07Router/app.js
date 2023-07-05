const express = require("express");
const app = express();

//user.js 모듈 가져오기
const userRouter = require("./routes/user");
//board.js 모듈 가져오기
const boardRouter = require("./routes/board");

//user라우터 사용
//경로 : localhost:8888/user
app.use("/user", userRouter);

//board라우터 사용
//경로 : localhost:8888/board
app.use("/board", boardRouter);

app.set("port", process.env.PORT || 8888);
app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 서버 연결 기다리는중...");
});
