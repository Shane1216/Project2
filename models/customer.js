const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes)=> {
    const passenger = sequelize.define("passenger", {
        p_id: DataTypes.INTEGER,
        p_email: DataTypes.STRING,
        p_password: DataTypes.STRING,
        p_firstname: DataTypes.STRING,
        p_lastname: DataTypes.STRING,
        p_address1: DataTypes.STRING,
        p_address2: DataTypes.STRING,
        p_city: DataTypes.STRING,
        p_state: DataTypes.STRING,
        p_zip: DataTypes.STRING,
        p_createdat: DataTypes.DATE
    }, {
            timestamps: false
        });
    return passenger;
};
