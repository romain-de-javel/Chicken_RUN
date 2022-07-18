const express = require('express')
const chickens = require('./src/data/chickens')
const favicon = require('serve-favicon')
const morgan = require('morgan')

const app = express()
const port = process.env.PORT || 3000

app
    .use(favicon('./chicken.ico'))
    .use(morgan('dev'))


app.get("/", (req, res) => res.send("Hello, Wolrd!"))

// app.get("/chicken", (req, res) => {
//     res.json('All chickens has been found', chickens)
// })

app.get("/chicken/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const chicken = chickens.find(chicken => chicken.id === id)
    res.send(`${chicken.name}`)
})


app.listen(port, () => console.log(`The app has been started on : http://localhost:${port}`))