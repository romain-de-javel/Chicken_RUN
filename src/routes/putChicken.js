const { Chicken } = require('../data/sequelize')

module.exports = (app)  => {
    app.put("/chicken/:id", (req, res) =>{
        const id = req.params.id
       Chicken.update(req.body, {where: {id : id}})
        .then(_ =>{
            //return to avoid duplicated error handeling (500)
            return Chicken.findByPk(id)
            .then(chicken =>{
                if (chicken === null){
                    const ret_message = 'This chicken does not exist'
                    return res.status(404).json({ret_message, data: chicken})
                }
                const ret_message = `Chicken ${req.body.name} has been updated`
                res.json({ret_message, data: chicken})
            })
        })
        .catch(error => {
            if (error instanceof ValidationError){
                return res.status(400).json({message: error.message, data: error})
            }
            const ret_message = `The chicken cannot be updated`
            res.status(500).json({ret_message, data: error})
        })
    })
}