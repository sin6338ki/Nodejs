const http = require("http");
const fs = require("fs").promises;

const server = http.createServer(async (req, res) => {
  //async + await : 비동기 방식으로 처리시 사용
  //파일 읽어오는 동안 다른 작업도 진행할 수 있도록 비동기 방식으로 처리

  const file = await fs.readFile("./Ex03.html");

  res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
  res.write(file);
  res.end();
});

server.listen(8888);

server.on("listening", () => {
  console.log("8888 포트에서 서버 연결 기다리는 중...");
});
