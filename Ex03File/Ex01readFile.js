//파일 다루는 모듈
//fs : file system 파일을 다룰 때 활용
const fs = require("fs");

//fs -> 콜백함수
fs.readFile("./file1.txt", (err, data) => {
  //err : 파일 이름, 경로를 잘못썼을 때 발생할 수 있음
  //data : 파일을 제대로 읽어왔을 때 파일 안에 데이터
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
    //파일은 버퍼라는 임시저장 공간에 저장
    //data만 출력한 경우 16진수로 표현됨
    //toString()을 통해 변환
  }
});
