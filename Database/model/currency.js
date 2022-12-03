module.exports = (sequelize, DataTypes) => {
    const Currency = sequelize.define("crypto_currencies", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        symbol: {
            type: DataTypes.STRING,
        },
    }, {
        underscored: true,
        createdAt: true,
        updatedAt: true,
        paranoid: true,
    }
    );
    return Currency;
}