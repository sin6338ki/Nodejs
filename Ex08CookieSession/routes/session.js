const express = require("express");
const router = express.Router();

//세션 생성
router.get("/setsession", (req, res) => {
  //세션을 사용하기 위해서는 사용자를 구별해야 함
  // -> 클라이언트가 가지고 있음 -> req
  req.session.nickname = "byebyebye";
  req.session.lunch = "steak";
  res.send("세션 생성");
});

//세션 값 확인
router.get("/getsession", (req, res) => {
  res.send(req.session.nickname + "," + req.session.lunch);
});

//세션 삭제
router.get("/deletesession", (req, res) => {
  //사용자가 가지고 있는 sesion id 가지고 온후 destroy()
  req.session.destroy();
  res.send("세션삭제");
  //각각 삭제는 불가능 > 빈문자열로 변경
});

module.exports = router;
