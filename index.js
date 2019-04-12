const app = require('express')()
const port = 4000
const titanicRouter = require('./router/titanicRouter')
const cors = require('cors')


app.use(cors())
app.get('/' , (req,res) => {
    res.send('<h1> Selamat Datang di API Filtering dan Searching </h1>')
})

app.use('/titanic' , titanicRouter)

app.listen(port, () => console.log('Server Aktif di Port ' + port))