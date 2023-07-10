const express = require('express')
const User = require('../models/user')
const router = express.Router()

//DB 안에 값 넣기 
router.post('/insert', async (req, res, next)=>{
    let {id, pw, age} = req.body
    
    try{
        //insert
        const result = await User.create({
            id : id, //column : value
            pw : pw,
            age : age
        }) 

        res.json(result)
    }catch(err){
        next(err) //에러처리 미들웨어
    }

})

//전체 회원 정보 조회
router.get('/select', async(req, res, next)=>{
    try{
        const result = await User.findAll()
        res.json(result)
    }catch(err){
        next(err)
    }
})

//특정 회원 정보 조회
router.get('/select/:id', async(req, res, next)=>{
    let reqId = req.params.id
    try{
        //조건 O, 가지고 오는 결과물이 무조건 하나 -> findOne
        //조건 O, 가지고 오는 결과물이 여러개 -> findAll
        const result = await User.findOne({
            where : {id : reqId},
            //컬럼을 선택해서 가지고 오고 싶을 때 
            attributes : ['id', 'age']
        })
        res.json(result)
    }catch(err){
        next(err)
    }
})

//회원정보 수정하기 - UPTATE, PATCH
//UPDATE : 모두 업데이트할 때 (전부)
//PATCH : 일부만 업데이트하고 싶을 때 (data ->  body)
router.patch('/update/:id', async(req, res, next)=>{
    try{
        const result = await User.update({
            pw : req.body.pw,
            age : req.body.age
        },{
            where : {id : req.params.id}
        })

        res.json(result) //정수형 반환
    }catch(err){
        next(err)
    }
})

//회원정보 삭제하기
router.delete('/delete/:id', async(req, res, next)=>{
    try{
        const result = await User.destroy({
            where : {id : req.params.id}
        })

        res.json(result)
    }catch(err){
        next(err)
    }
})

module.exports = router