module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Chicken',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        birthday:{
            type: DataTypes.DATE,
        },
        weight:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        steps:{
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        isRunning:{
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    })
}