const router = require('express').Router()
const db = require('./../database')

router.get('/allData' , (req,res) => {
    var sql = `select PassengerId, Survived, Pclass,Name,Sex,Age,Fare 
    from train;`
    db.query(sql , (err,result) => {
        res.send(result)
    })
})

router.get('/pclassData' , (req,res) => {
    var sql = `select Pclass from train group by Pclass order by Pclass`
    db.query(sql , (err,result) => {
        res.send(result)
    })
})


module.exports = router