const chickens = require('../controllers/controllers')

module.exports = app =>{
    var router = require('express').Router()
    
    router.get('/chicken/run', chickens.chickensRunAll)
    router.get('/chicken/run/:id', chickens.chickenRun)
    router.get('/chicken', chickens.findAll)
    router.get('/chicken/:id', chickens.findOne)
    router.post('/chicken', chickens.create)
    router.patch('/chicken/:id', chickens.updatePATCH)
    router.put('/chicken/:id', chickens.updatePUT)
    router.delete('/chicken', chickens.deleteAll)
    router.delete('/chicken/:id', chickens.delete)

    app.use('/', router)
}