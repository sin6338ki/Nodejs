const Sequelize = require('sequelize')

module.exports = class Member extends Sequelize.Model{
    //init : 테이블 정의 (컬럼, 자료형, ... , 테이블 자체에 대한 설정)
    //associate : 테이블 관계 설정
    static init(sequelize){ //sequelize -> models/init.js에서 생성한 Sequelize 객체
        return super.init({
            id : {
                type : Sequelize.STRING(50), //자료형 타입, 크기
                primaryKey : true, //프라이머리키 속성
                allowNull : false, //널값 허용 여부
                unique : true
            },
            pw : {
                type : Sequelize.STRING(50),
                allowNull : false
            },
            nick : {
                type : Sequelize.STRING(50),
                allowNull : false
            }
        },{
            sequelize,
            timestamps: false,
            modelName: 'Member', //프로젝트 안에서 어떤 이름으로 사용할 것인지
            tableName : 'member',
            charset : 'utf8',
            collate : 'utf8_general_ci'
        })
    }

    static associate(db){ //테이블 관계 설정

    }
}