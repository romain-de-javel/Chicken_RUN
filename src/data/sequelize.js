const { Sequelize, DataTypes } = require('sequelize')
const ChickenModel = require('../models/chicken')
const chickens = require('./chickens')

const sequelize = new Sequelize(
    'chickens',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mariadb',
        logging: false
    }
    )

sequelize.authenticate()
    .then(_ => console.log("Well connected to the DB"))
    .catch(error => console.error(`Impossible to connect to the DB ${error}`))

const Chicken = ChickenModel(sequelize, DataTypes)

const init = () => {
    return sequelize.sync({force: true}).then(_ => {
        console.log(`The database has well been synchronised`)
        
        chickens.map(chicken => {
            Chicken.create({
                name: chicken.name,
                birthday: chicken.birthday,
                weight: chicken.weight,
                steps: chicken.steps,
                isRunning: chicken.isRunning
            })
        })
    })
}

module.exports = {init, Chicken}