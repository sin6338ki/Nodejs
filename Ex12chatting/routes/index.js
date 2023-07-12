const express = require('express')
const Room = require('../models/room')
const router = express.Router()

//첫페이지
router.get('/', (req, res)=>{
    res.render('login') //login.html 렌더링
})

//rooms 보여주는 페이지 (DB에서 채팅방 리스트 불러와야 함!)
router.get('/rooms', async(req, res, next)=>{

    try{
        const result = await Room.findAll()
        // console.log(result);

        //result를 html로 보내줘야 함
        res.render('rooms', {rooms:result})
    }catch(err){
        next(err)
    }
})

module.exports = router