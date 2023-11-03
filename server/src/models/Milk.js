module.exports = (sequelize, DataTypes) => {
    const Milk = sequelize.define('Milk', {
        name: DataTypes.STRING,
        brand: DataTypes.STRING,
        detail: DataTypes.STRING,
        price: DataTypes.INTEGER
    })
    return Milk
}