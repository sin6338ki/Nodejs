const express = require('express')
const Member = require('../models/member')
const router = express.Router()

router.post('/login', async(req, res, next)=>{
    console.log(req.body)
    let {id, pw} = req.body
    try{
        const result = await Member.findOne({
            where : {id : id, pw : pw}
            //id, pw로만 작성해도 들어감
        })

        req.session.member = result
        req.session.save(function(){
            
            if(member){
                res.send('OK')
            }else{
                res.send('Fail')
            }
    })}catch(err){
        next(err)
    }
})

module.exports = router;\