const http = require("http");

//리스너 붙이는 방식
const server = http.createServer((req, res) => {
  //REST API : 요청 주소만 봐도 어떤 요청을 하는지 알 수 있도록 해주는 형식
  //전체회원정보 - [GET]localhost:8888/fullstack(context)/user
  //1번회원정보 - [GET]localhost:8888/fullstack/user/1
  //              --> 주소 자체에 뭘 원하는지 표기하는 방식

  //요청 경로에 따라 다른 응답을 하고 싶을 때 req.url 사용하면 됨
  console.log(req.url);
  if (req.url === "/home") {
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });

    let data = "<html>";
    data += "<body>";
    data += "<h3>home</h3>";
    data += "</body>";
    data += "</html>";

    res.write(data);
    res.end();
  } else if (req.url === "/plus") {
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });

    let data = "<html>";
    data += "<body>";
    data += "<h3>plus</h3>";
    data += "</body>";
    data += "</html>";

    res.write(data);
    res.end();
  } else {
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });

    let data = "<html>";
    data += "<body>";
    data += "<h3>잘못된 경로입니다.</h3>";
    data += "</body>";
    data += "</html>";

    res.write(data);
    res.end();
  }
});

//어디서 요청이 오는지 듣겠다
server.listen(8888);

//어떻게 처리를 하고 싶은지
server.on("listening", () => {
  console.log("8888 포트에서 서버 연결 기다리는 중...");
});
