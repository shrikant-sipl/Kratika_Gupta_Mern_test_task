module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("users", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        user_Type: {
            type: DataTypes.STRING
        },
        crypto_wallet_address: {
            type: DataTypes.STRING
        },
        login_token: {
            type: DataTypes.STRING
        },
    }, {
        underscored: true,
        createdAt: true,
        updatedAt: true,
        paranoid: true,
    }
    );
    return Users;
}