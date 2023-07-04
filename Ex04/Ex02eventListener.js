const http = require("http");

const server = http.createServer((req, res) => {
  //요청 : 클라이언트에서 localhost:8888로 요청이 들어오면!

  //응답 : html 문서를 만들어서 응답

  //HTTP 상태코드
  //- 요청과 응답이 정상(200) - 요청이 잘못왔다(404) - 서버 로직에서 오류 발생(500) 등
  //상태를 숫자로 표기해줌

  //(응답 데이터 형식 지정, 인코딩)
  res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });

  let data = "<html>";
  data += "<body>";
  data += "<h1>Hello Node!</h1>";
  data += "</body>";
  data += "</html>";

  res.write(data);
  res.end(); //응답의 끝을 꼭 알려줘야 함
});

server.listen(8888);

//listening 이벤트 리스터를 붙여서 사용하는 방법
server.on("listening", () => {
  console.log("8888번 포트에서 서버 연결 기다리는 중...");
});
