const express = require('express')
const session = require('express-session')
const fileStore = require('session-file-store')(session)
const {sequelize} = require('./models')
const indexRouter = require('./routes') //./routes/index
const memberRouter = require('./routes/member')
const nunjucks = require('nunjucks')
const app = express()

//force : false -> 기존 테이블은 건들지 않음
sequelize.sync({force:false}) 
.then(()=>{console.log('DB 연결 성공!');})
.catch((err)=>{console.log(err);})

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
)

app.use(express.urlencoded({extended:true}))

app.use('/', indexRouter)
app.use('/member', memberRouter)

app.set('port', process.env.PORT||8888)
app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 포트에서 서버 연결 대기중...');
})