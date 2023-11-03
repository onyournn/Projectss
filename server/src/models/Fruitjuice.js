module.exports = (sequelize, DataTypes) => {
    const Fruitjuice = sequelize.define('Fruitjuice', {
        name: DataTypes.STRING,
        brand: DataTypes.STRING,
        detail: DataTypes.STRING,
        price: DataTypes.INTEGER
    })
    return Fruitjuice
}