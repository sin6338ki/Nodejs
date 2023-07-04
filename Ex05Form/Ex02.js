const http = require("http");
const fs = require("fs").promises;
const url = require("url");

const server = http.createServer(async (req, res) => {
  let reqUrl = req.url;
  let pathname = url.parse(reqUrl, true).pathname;
  console.log(reqUrl);

  //화면에 plus 연산 창 띄우기
  if (pathname === "/api/form") {
    const f = await fs.readFile("./Ex02.html");
    res.writeHead(200, { "Context-Type": "text/html; charset=UTF-8" });
    res.write(f);
    res.end();
  } else if (pathname == "/api/ope") {
    let queryData = url.parse(reqUrl, true).query;
    res.writeHead(200, { "Context-Type": "text/html; charset=UTF-8" });

    let result;
    let num1 = Number(queryData.num1);
    let num2 = Number(queryData.num2);
    let ope = queryData.operation;
    if (ope === "+") {
      result = num1 + num2;
    } else if (ope === "-") {
      result = num1 - num2;
    } else if (ope === "*") {
      result = num1 * num2;
    } else {
      result = num1 / num2;
    }

    let html = "<html>";
    html += "<body>";
    html += "<h3>" + num1 + ope + num2 + "=" + result + "</h3>";
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
