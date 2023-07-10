const express = require("express")
const nunjucks = require('nunjucks')
const webSocket = require('./socket')
const indexRouter = require('./routes/index')
const app = express()

app.set('views', __dirname+'/views')
app.set('view engine', 'html')

app.use('/',indexRouter)

nunjucks.configure('views', {
    express : app,
    watch : true
})

app.set('port', process.env.PORT||8888)
//server 객체 생성
const server = app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 포트에서 서버연결 기다리는중...');
})

//webSocket 사용
webSocket(server)