const express = require('express')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const sequelize = require('./src/data/sequelize')

// create the app
const app = express()
const port = process.env.PORT || 3000

// middlewares express
app
    .use(favicon('./chicken.ico'))
    .use(morgan('dev'))
    .use(bodyParser.json())

// init the db
sequelize.init()

// Find here the call to all routes
require('./src/routes/routes')(app)

app.listen(port, () => console.log(`The app has been started on : http://localhost:${port}`))