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
    router.patch('/status',Controllers.ChangeStatus)
    router.post('/test',Controllers.test)
    router.get('/myOrder',Controllers.myOrder)
    router.patch('/complete_transaction',Controllers.complete_transaction)
})

app.listen(port, () => console.log(`Listening on port ${port}!`))