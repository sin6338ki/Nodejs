setImmediate(() => {
  console.log("setImmediate 실행!");
  //완벽하게 즉시 실행은 아님!
});

setTimeout(() => {
  console.log("setTimeout 실행!");
  //완벽하게 0s 후 실행되는 것은 아님!
}, 0);

//event loop 스케줄링 : timer -> pending -> poll -> ... -> check 영역 순으로 스케줄링 진행
//timer : setTimeout
//check : setImmediate

//nexttick : 우선 처리, 즉시 실행하려면 nexttick 사용
//event loop와는 별개로 현재 실행중인 동작이 완료되면 바로 실행
process.nextTick(() => {
  console.log("nextTick 실행!");
});
