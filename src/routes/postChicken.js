const { ValidationError } = require('sequelize')
const { Chicken } = require('../data/sequelize')

module.exports = (app)  => {
    app.post("/chicken", (req, res) =>{
        Chicken.create(req.body)
        .then(chicken => {
            const ret_message = `Chicken ${req.body.name} has been created`
            res.json({ret_message, data: chicken})
        })
        .catch(error => {
            if (error instanceof ValidationError){
                return res.status(400).json({message: error.message, data: error})
            }
            const ret_message = 'Chicken cannot be create, retry later'
            res.status(500).json({ret_message, data: error})
        })
    })
}