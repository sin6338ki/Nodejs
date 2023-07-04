const fs = require("fs").promises;
//promises : 비동기 처리시 콜백함수 늪에 빠질 수 있는 단점을 보완

fs.readFile("./file1.txt")
  .then((data) => {
    //.then : 작업에 성공했을 때
    console.log(data.toString());
  })
  //.catch : 작업 수행 중 오류가 발생했을 때
  .catch((err) => {
    console.log(err);
  });
