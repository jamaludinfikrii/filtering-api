const router = require('express').Router()
const conn = require('./../database')


router.get('/tenData' , (req,res) => {
    var sql = `select * from data limit 10;`
    conn.query(sql , (err,result) => {
        if(err) throw err
        res.send(result)
    })
})

router.get('/paging/:a' , (req,res) => {
    var page = req.params.a
    var sql = `select * from data limit 10 offset ${page*10}`
    conn.query(sql , (err, result) => {
        if(err) throw err
        res.send(result)
    })
})

router.get('/filter' , (req,res) => {
    var nama = req.query.nama
    var pclass = req.query.pclass
    var sql = ''
    if(nama){
        sql = `select * from data where Name like '${nama}%'`
    }
    if(pclass){
        sql = `select * from data where Pclass = '${pclass}'`
    }
    if(pclass && nama){
        sql = `select * 
               from data 
               where Name like '${nama}%' and 
               Pclass = '${pclass}'`
    }
    conn.query(sql , (err,result) => {
        if(err) throw err
        res.send(result)
    })
})

// 'localhost:2000/titanic2/filter?nama='br''

module.exports = router