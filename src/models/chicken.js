module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Chicken',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha : {msg: 'name must be a string whith only letters'},
                notNull: {msg: 'name is required'}
            }
        },
        birthday:{
            type: DataTypes.DATE,
        },
        weight:{
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                isDecimal : {msg: 'weight must be a number'},
                notNull: {msg: 'weight is required'}
            }
        },
        steps:{
            type: DataTypes.DECIMAL,
            defaultValue: 0,
            validate: {
                isDecimal : {msg: 'steps must be a number'}
            }
        },
        isRunning:{
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    })
}