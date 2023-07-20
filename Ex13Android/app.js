const express = require('express')
const app = express()
const indexRouter = require('./routes/index')

app.use(express.urlencoded({extended:true})) //post요청 - req.body 파싱
// app.use(bodyParser.json()) //json형식의 body 파싱

app.use('/', indexRouter)

app.set('port', process.env.PORT||8888)
app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 포트에서 서버연결 기다리는중...');
})