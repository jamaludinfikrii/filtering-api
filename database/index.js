const mysql = require('mysql')

const db = mysql.createConnection({
    host : 'localhost',
    user : 'jamal',
    password : 'jamaludin',
    database : 'titanic_data',
    port : 3306,
})

module.exports = db