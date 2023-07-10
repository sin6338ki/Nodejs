//sequelize 가져오기
const Sequelize = require('sequelize')

//user객체를 생성할 수 있는 class를 생성
module.exports = class User extends Sequelize.Model{
    //1. init : 테이블에 대한 컬럼, 자료형... -> 테이블 자체에 대한 설정 정의
    //2. associate : 테이블과 테이블의 관계 설정, 연관성 정의

    //init
    //static : 프로그램 시작부터 바로 사용할 수 있도록
    static init(sequelize){
        //Sequelize가 가지고 있는 init 사용
        return super.init({
            //컬럼 정보(id, pw, age)
            id : {
                //자료형 (sequelize에서 제공하는 자료형)
                type : Sequelize.STRING(50),
                allowNull : false, //null값 허용 여부
                primaryKey : true, //기본키 지정
                unique : true, //UNIQUE 설정
            },
            pw : {
                type : Sequelize.STRING(50),
            },
            age : {
                type : Sequelize.INTEGER.UNSIGNED
            }
        },{
            //테이블에 대한 설정 지정
            sequelize, //models/index -> user 연결
            timestamps : false, //true->createAt, updateAt 컬럼이 자동으로 생성
            modelName : 'User', //프록젝트(node)에서 사용하는 객체이름
            tableName : 'users', //실제 DB 테이블 이름
            charset : 'utf8', //인코딩설정
            collate : 'utf8_general_ci', //인코딩 설정시 함께 작성해줘야 함!
        })
    }

    //associate
    static associate(db){
        //1:다 관계 설정
        // db.User.hasMany(db.Board, {foreignKey : 'id', sourceKey : 'id'})
        //1:1 관계 설정 : db.User.hasOne
        //N:M 관계 설정 : db.User.belongToMany
    }

}