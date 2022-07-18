const { Chicken } = require('../data/sequelize')

module.exports = (app)  => {
    app.post("/chicken", (req, res) =>{
        Chicken.create(req.body).then(chicken => {
            const ret_message = `Chicken ${req.body.name} has been created`
            res.json({ret_message, data: chicken})
        })
    })
}