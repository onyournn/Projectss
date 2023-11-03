module.exports = (sequelize, DataTypes) => {
    const Tea = sequelize.define('Tea', {
        name: DataTypes.STRING,
        brand: DataTypes.STRING,
        detail: DataTypes.STRING,
        price: DataTypes.INTEGER
    })
    return Tea
}