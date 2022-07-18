const { Chicken } = require('../data/sequelize')

module.exports = (app)  => {
    app.get("/chicken/:id", (req, res) =>{
        Chicken.findByPk(req.params.id).then(chicken => {
            if (chicken === null){
                const ret_message = 'This chicken does not exist, try another id'
                return res.status(404).json({ret_message, data: chicken})
            }
            const ret_message = 'The chicken has been found'
            res.json({ret_message, data: chicken})
        })
        .catch(error => {
            const ret_message = `The chicken cannot be retrieved`
            res.status(500).json({ret_message, data: error})
        })
    })
}