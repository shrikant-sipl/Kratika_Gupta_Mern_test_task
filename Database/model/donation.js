module.exports = (sequelize, DataTypes) => {
    const Donation = sequelize.define("donations", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        currency: {
            type: DataTypes.STRING,
        },
        donation_amount: {
            type: DataTypes.INTEGER,
        },
        total_amount: {
            type: DataTypes.INTEGER,
        },
        fk_campaign_id: {
            type: DataTypes.INTEGER,
        },
    }, {
        underscored: true,
        createdAt: true,
        updatedAt: true,
        paranoid: true,
    }
    );
    return Donation;
}