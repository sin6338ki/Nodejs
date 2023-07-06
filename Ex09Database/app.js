const express = require("express");
const nunjucks = require("nunjucks");
const app = express();
//index는 첫번째라는 의미 > 생략가능
const indexRouter = require("./routes");

//nunjucks 활용을 위한 설정
//html 문서 경로, 형식
//1. views 값 설정 : view를 저장하고 있는 폴더의 경로
app.set("views", __dirname + "/views");
//2.view engine : 기본적으로 사용할 형식
app.set("view engine", "html");
//nunjucks 설정
nunjucks.configure("views", {
  express: app, //app(express) 객체 연결
  watch: true, //html 파일이 제대로 연결되면 템플릿 엔진을 렌더링하겠다는 의미
});

app.use("/", indexRouter); //localhost:8888/...

app.set("port", process.env.PORT || 8888);
app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번에서 서버 연결 기다리는중...");
});
