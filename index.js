const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = 8080

Controllers = require('./controllers/index')

app.use(bodyParser.json())

app.group('/api/v1',(router) => {

    router.post('/transactions',Controllers.transactions)
    router.get('/listmenu',Controllers.listmenu)
    router.post('/order',Controllers.orders)
    router.patch('/status/:id',Controllers.ChangeStatus)
})

app.listen(port, () => console.log(`Listening on port ${port}!`))