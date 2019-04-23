const app = require('express')()
const port = 4000
const titanicRouter = require('./router/titanicRouter')
const titanicRouter2 = require('./router/filteringFromBackend')
const cors = require('cors')


app.use(cors())
app.get('/' , (req,res) => {
    res.send('<h1> Selamat Datang di API Filtering dan Searching </h1>')
})

app.use('/rajaongkir' , require('./router/rajaongkir'))
app.use('/titanic' , titanicRouter)
app.use('/titanic2' , titanicRouter2)

app.listen(port, () => console.log('Server Aktif di Port ' + port))