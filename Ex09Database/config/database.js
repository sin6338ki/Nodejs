//mySQL 연동
//mysql2 : promises 사용이 가능한 형태
const mysql = require("mysql2");

const db_info = {
  host: "localhost",
  port: "3306",
  user: "fullstack",
  password: "12345",
  database: "boot",
};

//설정들을 app, router에서 사용할 수 있도록 내보내야 함
//실제 DB와 연결 -> 함수로 정의 -> 함수 자체를 내보낼 예정
//초기화, 연결 -> 2개의 함수 작성
module.exports = {
  init: function () {
    //db_info로 연결 객체(connection) 생성, 반환
    //mysql12에서 연결 객체 생성 가능
    return mysql.createConnection(db_info);
  },
  connect: function (conn) {
    //mysql 서버와 연결해주는 함수, conn -> 연결 객체
    conn.connect(function (err) {
      if (err) console.log("연결 실패 !" + err);
      else console.log("연결 성공 !");
    });
  },
};
