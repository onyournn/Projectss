module.exports = (sequelize, DataTypes) => {
    const Beverage = sequelize.define('Beverage', {
        name: DataTypes.STRING,
        brand: DataTypes.STRING,
        category: DataTypes.STRING,
        price: DataTypes.INTEGER
    })
    return Beverage
}