const express = require('express')
const db = require('../config/database')
const router = express.Router()

const conn = db.init()
db.connect(conn)

//로그인
router.post('/login', (req, res)=>{

    let andMember = JSON.parse(req.body.user)
    let{id,pw} = andMember
    let sql = "select * from andmember where id = ? and pw =?"
    conn.query(sql, [id, pw], function(err, rows){
        if(err){
            console.log(err);
            res.send("FAIL")
        }else{
            console.log(rows);
            if(rows.length>0){
                //로그인성공
                res.send(rows)
            }else{
                //로그인 실패
                res.send("login fail")
            }
        }
    })
})

module.exports = router