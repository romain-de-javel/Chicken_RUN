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

// init the DB
sequelize.init()

// Find here all routes
require('./src/routes/getAllChickens')(app)
require('./src/routes/getOneChicken')(app)
require('./src/routes/postChicken')(app)
require('./src/routes/deleteChicken')(app)
require('./src/routes/putChicken')(app)

app.listen(port, () => console.log(`The app has been started on : http://localhost:${port}`))