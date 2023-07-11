const Sequelize = require('sequelize')
const Member = require('./member')

const env = process.env.NODE_ENV || 'development'
//[env] : development만 사용하기 위해 key값 지정
const config = require('../config/config.json')[env] //개발용 DB 사용 

//Sequelize 객체 생성 
//member init 호출시 사용 
const sequelize = new Sequelize(config.database, config.username, config.password, config)

//sequelize를 어떻게 사용할 것인가 

const db = {} //app (model, sequelize - db 연결정보)

db.sequelize = sequelize
db.Member = Member

//init, associate 실행
Member.init(sequelize) //테이블 생성 
Member.associate(db) //테이블 연관관계 설정
//associate는 다른 테이블과의 관계 설정해야 하므로 다른 테이블에 대한 정보가 필요함 => db안에 담겨져 있음 => 매개변수로 db

module.exports = db
