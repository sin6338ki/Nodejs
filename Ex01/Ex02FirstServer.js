// 서버 구축을 위해 http 모듈을 사용
// 직접 만들수도 있음!
// http 모듈
const http = require("http");

// req(요청), res(응답)
// 순서 바뀌면 안됨! 앞에는 무조건 요청, 뒤는 무조건 응답
http
  .createServer((req, res) => {
    //요청, 응답에 대한 로직 작성
  })
  .listen(8888, () => {
    console.log("8888 포트에서 서버 연결 기다리는 중");
  });
