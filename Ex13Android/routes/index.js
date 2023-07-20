const express = require('express')
const db = require('../config/database')
const router = express.Router()

const conn = db.init()
db.connect(conn)

//회원가입
//http://172.30.1.42:8888/join
router.post('/join', (req, res)=>{
    console.log(req.body.AndMember);
    let andMember = JSON.parse(req.body.AndMember)
    
    console.log(andMember);
    //json 데이터 받을 때 : 키값 매칭
    let {id, pw, birth, tel} = andMember
    // let id = andMember.id
    // let pw = andMember.pw
    // let birth = andMember.birth
    // let tel = andMember.tel
    // console.log(id);

    let sql = "insert into andmember values (?,?,?,?)"
    conn.query(sql, [id, pw, tel, birth], function(err, rows, fields){
        console.log(rows.affectedRows);
        if(err){ //오류 발생했을 때
            console.log(err);
            res.send("Fail")
        }else{
            console.log(rows);
            if(rows.affectedRows>0){
                res.send('success')
            }
        }
    })
})

router.post('/login', (req, res)=>{
    // console.log(req.body.loginAmv);
    let andLoginMember = JSON.parse(req.body.loginAmv)

    let {id, pw} = andLoginMember

    let sql = "select * from andmember where id = ? and pw = ?"
    conn.query(sql, [id, pw], function(err, rows){
        if(err){
            console.log(err);
            res.send('Fail')
        }else{
            console.log(rows);
            if(rows.length > 0){
                res.send('로그인 성공')
            }else{
                res.send('로그인 실패')
            }
        }
    })
})


module.exports = router