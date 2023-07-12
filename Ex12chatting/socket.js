const socketIO = require('socket.io')

//server : app에서 생성한 express server
module.exports = (server)=>{

    //express server - socket 연결
    //1) 소켓 객체 생성
    const io = socketIO(server, {path : '/socket.io'})
    //2) io 객체를 가지고 접속 성공, 접속 해제, 에러 이벤트 추가
    // 라우팅 (-> 네임스페이스 : 기능 구분, 경로에 따라 다른 곳에서 처리)
    // - 채팅 기능 ->  /chat
    // - 실시간 알림  -> /alarm
    // - 통째로 처리하고 싶을 때 io.on
    // - namespace 설정 : io.of('경로')
    const chat = io.of('/chat') //채팅 관련 네임스페이스
    chat.on('connection', (socket)=>{
        //연결이 되면 클라이언트와 연결하는 소켓이 생성됨(소켓이 클라이언트의 정보 담고 있음)
        console.log('chat 네임스페이스 접속 성공 ');

        //room 설정 (room 기능을 socket.io에서 제공하고 있음)
        // -> 방이름(roomid) 설정 -> 클라이언트의 요청 경로(request)에 포함
        //room에 들어간 클라이언트끼리만 소통할 수 있도록!
        const ref = socket.request.headers.referer //클라이언트가 요청한 주소
        const roomid = ref.split('/')[ref.split('/').length-1];
        console.log(roomid); 

        //roomid에 따라서 룸을 만들어줌
        socket.join(roomid)

        //클라이언트마다 소켓 생성되므로 socket에 이벤트 부여
        socket.on('disconnect', ()=>{
            console.log('chat 네임스페이스에서 접속 해제');
        })

        //chat 이벤트 : 사용자가 입력한 값(data)을 뿌려줌
        socket.on('chat', (data)=>{

        })

    }) //채팅 연결 이벤트
}