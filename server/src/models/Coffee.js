module.exports = (sequelize, DataTypes) => {
    const Coffee = sequelize.define('Coffee', {
        name: DataTypes.STRING,
        brand: DataTypes.STRING,
        detail: DataTypes.STRING,
        price: DataTypes.INTEGER
    })
    return Coffee
}