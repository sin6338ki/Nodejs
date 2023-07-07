const express = require("express");
const router = express.Router();

//쿠키 생성
router.get("/setcookie", (req, res) => {
  let nick = "hello";
  //닉네임이 담긴 쿠키 생성
  //쿠키 생성 프로세스
  //1. 서버에서 쿠키 생성
  //2. 보관은 클라이언트에서 보관하므로 생성된 쿠키는 응답할 때 포함해서 응답
  //   -> res.cookie(key, value, {만료기간})
  //key-value 쌍으로 존재
  //실제로 value값은 암호화되어 있음
  res.cookie("nickname", nick, {
    //쿠키가 몇 초동안 살아있게끔 할 것인가 (ms단위)
    maxAge: 1000 * 60 * 60 * 24 * 30,
    //암호화 : 쿠키 서명
    //어떤 키값으로 설정한것인지 설정 필요
    signed: true,
  });

  res.cookie("lunch", "sandwitch", {
    //만료일자 날짜표기 방식 - expires
    //날짜 형태의 객체 생셩 - new Date()
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24), //하루 후 만료
  });

  res.send("쿠키 생성!");
});

//쿠키 값 확인하기
router.get("/getcookies", (req, res) => {
  //req.cookie : 서명이 안 된 쿠키만 가지고 올 수 있음
  console.log(req.cookies.lunch);
  console.log(req.signedCookies.nickname); //서명된 쿠키 가져오기
});

//쿠키 삭제
router.get("/deletecookie", (req, res) => {
  res.clearCookie("lunch");
  res.send("쿠키 삭제");
});

module.exports = router;
