const { Chicken } = require('../data/sequelize')

module.exports = (app)  => {
    app.delete("/chicken/:id", (req, res) =>{
        Chicken.findByPk(req.params.id).then(chicken => {
            if (chicken === null){
                const ret_message = 'This chicken does not exist'
                return res.status(404).json({ret_message, data: chicken})
            }
            const deletedChicken = chicken
             //return to avoid duplicated error handeling (500)
            return Chicken.destroy({
                where : {id : chicken.id}
            }).then(_ =>{
                const ret_message = 'The right chicken has been found'
                res.json({ret_message, data: deletedChicken})
            })
        })
        .catch(error => {
            const ret_message = 'This chicken cannot be deleted'
            res.status(404).json({ret_message, data: error})
        })
    })
}