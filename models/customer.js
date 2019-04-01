const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Passenger = sequelize.define("Passenger", {
        p_id: Sequelize.INTEGER,
        p_email: Sequelize.STRING,
        p_password: Sequelize.STRING,
        p_firstname: Sequelize.STRING,
        p_lastname: Sequelize.STRING,
        p_address1: Sequelize.STRING,
        p_address2: Sequelize.STRING,
        p_city: Sequelize.STRING,
        p_state: Sequelize.STRING,
        p_zip: Sequelize.STRING,
        p_createdat: Sequelize.DATE
    }, {
            timestamps: false
        });
    return Passenger;
};
