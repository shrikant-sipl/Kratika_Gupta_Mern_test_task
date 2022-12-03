module.exports = (sequelize, DataTypes) => {
    const Campaign = sequelize.define("campaigns", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
        budget_amount: {
            type: DataTypes.INTEGER
        },
        status: {
            type: DataTypes.STRING
        },
        expiration_date: {
            type: DataTypes.STRING
        }
    }, {
        underscored: true,
        createdAt: true,
        updatedAt: true,
        paranoid: true,
    }
    );
    return Campaign;
}