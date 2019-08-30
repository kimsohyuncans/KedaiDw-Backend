const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = 5000

Controllers = require('./controllers/index')

app.use(bodyParser.json())

app.group('/api/v1',(router) => {

    router.get('/',Controllers.showusers)
})

app.listen(port, () => console.log(`Listening on port ${port}!`))