//user 경로 요청 처리 router
//라우터 인스턴스 생성
const express = require("express");
const router = express.Router();

//라우터 사용하여 get방식 요청
router.get("/test", (req, res) => {
  res.send("user 요청!");
});

//app에서 사용하기 위해 exports
module.exports = router;
