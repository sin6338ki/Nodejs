//모듈사용
const express = require('express') //express
const session = require('express-session') //session
const fileStore = require('session-file-store')(session) //session 저장
const {sequelize} = require('./models') //sequelize (ORM)
const webSocket = require('./socket') //socket
const nunjucks = require('nunjucks') //nunjucks - 템플릿엔진
const bodyParser = require('body-parser') //json타입 body 파싱

//router
const indexRouter = require('./routes') //./routes/index
const memberRouter = require('./routes/member')
const chatRouter = require('./routes/chat')

const app = express()

//sequelize DB 연결
//force : false -> 기존 테이블은 건들지 않음
sequelize.sync({force:false}) 
.then(()=>{console.log('DB 연결 성공!');})
.catch((err)=>{console.log(err);})

//nunjucks 설정
//view는 indexRouter에서 사용하므로 위쪽에서 작성해야 함 
app.set('views', __dirname+'/views')
app.set('view engine', 'html')
nunjucks.configure('views', {
    express : app,
    watch : true
})

//세션 설정 
app.use(
    session({
        httpOnly: true,
        secret: "secretkey",
        resave: false,
        cookie:{
            httpOnly: true,
        },
        store: new fileStore(),
    })
);

app.use(express.urlencoded({extended:true})) //post요청 - req.body 파싱
app.use(bodyParser.json()) //json형식의 body 파싱

//router 연결
app.use('/', indexRouter)
app.use('/member', memberRouter)
app.use('/chat', chatRouter)

//정적파일 경로 설정
app.use(express.static(__dirname+'/public'))

//서버 연결
app.set('port', process.env.PORT||8888)
const server = app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 포트에서 서버 연결 대기중...');
})

//소켓 연결
//소켓을 외부에서 사용할 수 있도록 app을 함께 전달
//app에 변수 저장하면 어디서나 사용할 수 있음
webSocket(server, app)