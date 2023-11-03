module.exports = (sequelize, DataTypes) => {
    const Softdrink = sequelize.define('Softdrink', {
        name: DataTypes.STRING,
        brand: DataTypes.STRING,
        detail: DataTypes.STRING,
        price: DataTypes.INTEGER
    })
    return Softdrink
}