const { odd, even } = require("./var"); // 현재 폴더의 var.js 모듈을 가져다 쓰겠다는 의미

function checkOddOrEven(num) {
  if (num % 2 === 1) {
    //홀수입니다. > var (odd) 모듈사용
    return odd;
  } else {
    //짝수입니다. > var (even) 모듈사용
    return even;
  }
}

module.exports = checkOddOrEven;
