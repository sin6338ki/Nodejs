const express = require("express");
const {sequelize} = require('./models') //models/index
const indexRouter = require('./routes/index')
const bodyParser = require('body-parser')
const app = express();

app.use(express.urlencoded({extended : true})) //body 데이터 가져올 때 추가
app.use(bodyParser.json()) //json형식의 데이터

//sequelize 설정
//동기화 설정
//force : true -> 테이블이 존재할 경우에는 삭제하는 속성 / false -> 기존 테이블을 건드리지 않는 속성
sequelize.sync({force : false})
.then(()=>console.log('DB연결성공!'))
.catch((err)=>{console.log(err);});

app.use('/', indexRouter)


app.set("port", process.env.PORT || 8888);
app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번에서 서버 연결 기다리는중...");
});
