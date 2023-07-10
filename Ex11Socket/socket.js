//서버쪽 소켓 작성
const socketIO = require('socket.io')

//어느 서버와 연결이 된 상태로 쓸 것인지 정의를 해줘야 함 (ex.port)
                //express server
module.exports = (server) => {
    //express server 연결, 클라이언트가 접속할 경로
    const io = socketIO(server, {path : '/socket.io'})

    //클라이언트가 접속했을 때 (connection) -> 해당 클라이언트와 통신할 수 있는 소켓 객체 생성
    io.on('connection', (socket)=>{
        //소켓은 클라이언트마다 다른 -> 임의적으로 id 발급
        console.log('새로운 클라이언트 접속!', socket.id);

        //소켓 연결 해제
        socket.on('disconnect', ()=>{
            console.log('클라이언트 접속 해제!', socket.id);
        })

        //오류 처리
        socket.on('error', (error)=>{
            console.log(error);
        })

        //클라이언트가 보낸 메시지 받기
        socket.on('reply', (data)=>{
            console.log(data); //data : 클라이언트가 보낸 메시지 자체
        })

        //서버가 클라이언트에게 메시지 보내기
        //서버쪽에서 먼저 이벤트 발생 (3초마다 메시지 보내기)
        socket.interval = setInterval(()=>{
            socket.emit('news', 'Hello Socket.io') //emit : event{key, value(event)} 발생
        }, 3000)
    })
}