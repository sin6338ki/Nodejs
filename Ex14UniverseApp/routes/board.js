const express = require('express')
const db = require('../config/database')
const router = express.Router()

const conn = db.init()
db.connect(conn)

router.get('/',(req, res)=>{
    let sql = "select * from andboard"
    conn.query(sql, function(err, rows){
        console.log(rows);
        res.send(rows)
    })


})

module.exports = router