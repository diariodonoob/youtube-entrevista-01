const express = require('express')
const bodyParser = require('body-parser')

require('./src/database/mongodb')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

require('./src/routes/post')(app)

const port = process.env.PORT || 8080

app.listen(port)