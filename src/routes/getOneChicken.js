const { Chicken } = require('../data/sequelize')

module.exports = (app)  => {
    app.get("/chicken/:id", (req, res) =>{
        Chicken.findByPk(req.params.id).then(chicken => {
            const ret_message = 'The right chicken has been found'
            res.json({ret_message, data: chicken})
        })
        // .catch(error => {
        //     const ret_message = 'This chicken doesn\'t exist'
        //     res.status(404).json({ret_message, data: error})
        // })
    })
}