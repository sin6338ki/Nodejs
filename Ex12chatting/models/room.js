const Sequelize = require('sequelize')

module.exports = class Room extends Sequelize.Model{
    static init(sequelize){ //sequelize -> models/init.js에서 생성한 Sequelize 객체
        return super.init({
            roomid : {
                type : Sequelize.STRING(50), //자료형 타입, 크기
                primaryKey : true, //프라이머리키 속성
                allowNull : false, //널값 허용 여부
                unique : true
            },
            title : {
                type : Sequelize.STRING(50),
                allowNull : false
            },
            owner : {
                type : Sequelize.STRING(50),
                allowNull : false
            }
        },{
            sequelize,
            timestamps: false,
            modelName: 'Room', //프로젝트 안에서 어떤 이름으로 사용할 것인지
            tableName : 'room',
            charset : 'utf8',
            collate : 'utf8_general_ci'
        })
    }

    static associate(db){ //테이블 관계 설정

    }
}