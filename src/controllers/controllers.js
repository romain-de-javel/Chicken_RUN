const { Chicken } = require('../data/sequelize')
const { ValidationError } = require('sequelize')

// find all chickens
exports.findAll = (req, res) =>{
    Chicken.findAll()
        .then(chicken => {
            const ret_message = 'All chickens have been found'
            res.json({ret_message, data: chicken})
        })
        .catch(error => {
            const ret_message = 'Chickens cannot be find, retry later'
            res.status(500).json({ret_message, data: error})
        })
}

// find the chicken with the right id
exports.findOne = (req, res) =>{
    Chicken.findByPk(req.params.id).then(chicken => {
        if (chicken === null){
            const msg = 'This cicken does not exist, try another one'
            return res.status(404).json({msg, data: {}})
        }
        const ret_message = 'The chicken has been found'
        res.json({ret_message, data: chicken})
    })
    .catch(error => {
        const ret_message = `The chicken cannot be retrieved`
        res.status(500).json({ret_message, data: error})
    })
}

// update a chicken with the put request
exports.updatePUT = (req, res) =>{
    const id = req.params.id
       Chicken.update(req.body, {where: {id : id}})
        .then(_ =>{
            //return to avoid duplicated error handeling (500)
            return Chicken.findByPk(id)
            .then(chicken =>{
                if (chicken === null){
                    const ret_message = 'This chicken does not exist'
                    return res.status(404).json({ret_message, data: {}})
                }
                const ret_message = `Chicken ${req.body.name} has been updated`
                res.json({ret_message, data: chicken})
            })
        })
        .catch(error => {
            if (error instanceof ValidationError){
                return res.status(400).json({message: error.msg, data: error})
            }
            const ret_message = `The chicken cannot be updated`
            res.status(500).json({ret_message, data: error})
        })
}

// update a chicken with the patch request
exports.updatePATCH = (req, res) =>{
    const id = req.params.id
    Chicken.update(req.body, {where: {id : id}})
     .then(_ =>{
         //return to avoid duplicated error handeling (500)
         return Chicken.findByPk(id)
         .then(chicken =>{
             if (chicken === null){
                 const ret_message = 'This chicken does not exist'
                 return res.status(404).json({ret_message, data: {}})
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
}

// create a new chicen and insert it in the db
exports.create = (req, res) =>{
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
}

// delete the chicken which has the id
exports.delete = (req, res) =>{
    Chicken.findByPk(req.params.id).then(chicken => {
        if (chicken === null){
            const ret_message = 'This chicken does not exist'
            return res.status(404).json({ret_message, data: {}})
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
}

// delete all chickens in the db
exports.deleteAll = (req, res) =>{
    Chicken.findAll().then(chicken => {
        const deletedChicken = chicken
         //return to avoid duplicated error handeling (500)
        return Chicken.destroy({where: {}, truncate: true}).then(_ =>{
            const ret_message = 'All data have beem deleted'
            res.json({ret_message, data: deletedChicken})
        })
    })
    .catch(error => {
        const ret_message = 'This chicken cannot be deleted'
        res.status(404).json({ret_message, data: error})
    })
}

// make run one chicken by incrementing steps
exports.chickenRun = async(req, res) =>{
    const id = req.params.id
        try{
            const chicken = await Chicken.findByPk(id)
            chicken.steps++
            chicken.save()
            const ret_message = `The chicken ${chicken.name} made 1 step`
            res.json({ret_message,  data: chicken})
        }catch(error){
            const ret_message = 'This chicken does not exist'
            return res.status(404).json({ret_message, data: error})
        }
}

// make run all chikens by incrementing steps
exports.chickensRunAll = async(req, res) =>{
    const id = req.params.id
    try{
        const chicken = await Chicken.findAll()
        chicken.map(element=>{element.steps++; element.save()})
        const ret_message = `All chickens made 1 step`
        res.json({ret_message,  data: chicken})
    }catch(error){
        const ret_message = 'This chicken does not exist'
        return res.status(404).json({ret_message, data: error})
    }
}