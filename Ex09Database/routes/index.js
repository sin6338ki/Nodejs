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
  let id = req.params.id;
  let sql = "select * from member where id = ?";

  // [] : ?에 들어갈 값들을 순서대로 작성
  conn.query(sql, [id], function (err, rows, fields) {
    console.log(rows);

    //비동기통신 > 데이터만 보내기
    //json형태로 데이터를 응답 {key : value}
    res.json({ member: rows });
  });
});

router.post("/insert", (req, res) => {
  //사용자가 입력한 id, pw, nick 값 받기
  //post -> body (body에 있는 데이터 가지고 오려면 parsing 설정 필요(app.js))
  let { id, pw, nick } = req.body;

  let sql = "insert into member values (?, ?, ?)";
  conn.query(sql, [id, pw, nick], function (err, rows, fields) {
    //affectedRows:영향 받은 행
    console.log(rows.affectedRows);

    //select로 다시 요청 > redirect
    res.redirect("/select");
  });
});

router.post("/update", (req, res) => {
  let { id, pw, nick } = req.body;

  let sql = "update member set pw = ?, nick = ? where id = ?";
  conn.query(sql, [pw, nick, id], function (err, rows, fields) {
    console.log(rows);

    res.redirect("/select");
  });
});

router.get("/delete/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);

  let sql = "delete from member where id = ?";
  conn.query(sql, [id], function (err, rows, fields) {
    console.log(rows);
  });

  res.redirect('/select')
});

module.exports = router;
