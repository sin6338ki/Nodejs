const http = require("http");

//파일 시스템 모듈 추가
const fs = require("fs").promises;

//url 관련 모듈
const url = require("url");

const server = http.createServer(async (req, res) => {
  //url 다루기
  //파라미터가 함께 넘어옴 -> url 모듈 사용
  let reqUrl = req.url;
  let pathname = url.parse(reqUrl, true).pathname;

  if (pathname === "/form") {
    const f = await fs.readFile("./Ex01.html");
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
    res.write(f);
    res.end();
  } else if (pathname === "/home") {
    let queryData = url.parse(reqUrl, true).query; //query, data (사용자가 입력한 값)
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });

    let html = "<html>";
    html += "<body>";
    html += "<h3>" + queryData.query + "</h3>";
    html += "<h3>" + queryData.data + "</h3>";
    html += "</body>";
    html += "</html>";

    res.write(html);
    res.end();
  }
});

server.listen(8888);
server.on("listening", () => {
  console.log("8888번 포트에서 서버 연결 기다리는 중...");
});
