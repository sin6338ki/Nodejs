const express = require('express')
const Chat = require('../models/chat')
const router = express.Router()

router.get('/:roomid', async(req, res, next)=>{
    console.log(req.params.roomid);

    //지금까지 진행된 채팅 내용 불러오기 
    try{
        const chats = await Chat.findAll({
            where : {roomid : req.params.roomid}
        })
        // console.log('채팅전체내용',chats);
        //nunjucks에서는 바로 session사용 불가능 -> 같이 보내줘야 함
    res.render('chat', {roomid : req.params.roomid, userid : req.session.member.id, chats : chats})
    }catch(err){
        next(err)
    }
})

router.post('/:roomid/insert', async(req, res, next)=>{
    let roomid = req.params.roomid;
    let chat = req.body.chat;
    let userid = req.session.member.id;

    console.log(roomid, chat, userid);
    try{
        //채팅db에 데이터 삽입 -> 다른 클라이언트 화면에 보이지 않음
        const chats = await Chat.create({
            roomid : roomid,
            chat : chat,
            userid : userid
        })
        
        //socket 사용 -> 이 채팅을 입력한 클라이언트와 같은 룸에 있는 모든 클라이언트에게 데이터 뿌려주기! (실시간)
        //데이터 뿌리기 (다른 클라이언트 화면에 데이터 보이도록)
        req.app.get('io').of('/chat').to(roomid).emit('chat', {userid : userid, chat:chat, roomid:roomid})
        res.send('OK')

    }catch(err){
        next(err)
    }
})


module.exports = router