const express = require("express");
const app = express();
const cookieRouter = require("./routes/cookie");
const sessionRouter = require("./routes/session");
const session = require("express-session");
const cookieParser = require("cookie-parser");

app.use(cookieParser("secretkey")); //쿠키 암호화 키 설정 (쿠키 라우터 사용 전 정의)
app.use(
  //아래 session 라우터 사용하기 전에 정의 필요
  session({
    httpOnly: true, //http 통신할 때만 허용
    secret: "secretkey", //암호화 키 설정
    resave: false, //세션에 수정사항이 없더라도 다시 저장할것인지에 대한 설정
    //세션 사용시 사용할 쿠키에 대한 설정
    cookie: {
      httpOnly: true,
    },
  })
); //express-session 사용

app.use("/c", cookieRouter); //localhost:8888/c/...
app.use("/s", sessionRouter); //localhost:8888/s/...

app.set("port", process.env.PORT || 8888);
app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 서버 연결 기다리는중...");
});
