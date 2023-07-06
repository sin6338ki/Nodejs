const express = require("express");
const db = require("../config/database");
const router = express.Router();

const conn = db.init(); //연결 객체 생성 후 반환
db.connect(conn); //실제 db 연결

//member 테이블 전체 정보 가져오기
router.get("/select", (req, res) => {
  //db에 있는 값은 계속 달라지고 그 값을 html에 반영해야 하므로
  //sendFile 사용 불가
  //화면을 계속 렌더링해줘야 함 -> render('html경로',)

  //실행한 sql문 정의
  let sql = "select * from member";
  //query(sql, 결과처리함수)
  //               err-오류, rows-select결과 데이터, fields - 결과 외 메타데이터
  conn.query(sql, function (err, rows, fields) {
    // console.log(err);
    // console.log(rows);
    // console.log(fields);

    // 결과 rows 보여주기
    //템플릿 엔진 : html 양식(템플릿) + 데이터 -> 결과 문서(nunjucks)
    //              -> 가지고 온 데이터를 활용해서 화면 렌더링
    res.render("index", {
      //key값 : 실제 value(데이터)
      list: rows,
    });
  }); //sql문 실행
});

router.get("/select/:id", (req, res) => {
  console.log(req.params);
  // let sql = "select * from member where id = ";
});

module.exports = router;
