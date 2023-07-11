const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.render('login') //login.html 렌더링
})

module.exports = router