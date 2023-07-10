//sequelize 모듈 가져오기
const Sequelize = require('sequelize')
//User 가져오기
const User = require('./user')

//데이터베이스와 연결하기 위한 작업, 어떤 DB 계정을 쓸 것인가
const env = process.env.NODE_ENV || 'development'
const config = require('../config/config')[env]

//Sequelize 객체 생성
//사용하고자하는 스키마이름, username, password 값 지정
const sequelize = new Sequelize(config.database, config.username, config.password, config)

//sequelize 객체, model에 대한 정보 
const db = {}

db.sequelize = sequelize
db.User = User

User.init(sequelize)
User.associate(db)

module.exports = db