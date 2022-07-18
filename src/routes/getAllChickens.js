const { Chicken } = require('../data/sequelize')

module.exports = (app)  => {
    app.get("/chicken", (req, res) =>{
        Chicken.findAll().then(chicken => {
            const ret_message = 'All chickens have been found'
            res.json({ret_message, data: chicken})
        })
        // .catch(error => {
        //     const ret_message = 'chikens cannot be find, retry soon'
        //     res.status(500).json({ret_message, data: error})
        // })
    })
}