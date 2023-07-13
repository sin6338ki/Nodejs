const Sequelize = require('sequelize')

module.exports = class Chat extends Sequelize.Model{
    static init(sequelize){ //sequelize -> models/init.js에서 생성한 Sequelize 객체
        return super.init({
            chatid : {
                type : Sequelize.INTEGER, //자료형 타입, 크기
                primaryKey : true, //프라이머리키 속성
                allowNull : false, //널값 허용 여부
                unique : true,
                //기본값 설정 
                autoIncrement : true
            },
            roomid : {
                type : Sequelize.STRING(50),
                allowNull : false
            },
            chat : {
                type : Sequelize.STRING(1000),
                allowNull : false
            },
            chatdt : {
                type : Sequelize.DATE,
                allowNull : false,
                defaultValue : Sequelize.NOW
            }
        },{
            sequelize,
            timestamps: false,
            modelName: 'Chat', //프로젝트 안에서 어떤 이름으로 사용할 것인지
            tableName : 'chat',
            charset : 'utf8',
            collate : 'utf8_general_ci'
        })
    }

    static associate(db){ //테이블 관계 설정
        //member(id) --- chat(user)
        //   1        :    N
        //   hasMany       belongsTo
        db.Chat.belongsTo(db.Member, {foreignKey:'userid', targetId:'id'})
    }
}