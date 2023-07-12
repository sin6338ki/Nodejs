const express = require('express')
const Chat = require('../models/chat')
const router = express.Router()

router.get('/:roomid', (req, res)=>{
    console.log(req.params.roomid);

    res.render('chat', {roomid : req.params.roomid})
})

router.post('/:roomid/insert', async(req, res, next)=>{
    console.log(req.params.roomid);
    console.log(req.body.chat);
    console.log(req.session.member.id);

    try{
        const chats = await Chat.create({
            roomid : req.params.roomid,
            chat : req.body.chat,
            userid : req.session.member.id
        })
    }catch(err){
        next(err)
    }
})


module.exports = router