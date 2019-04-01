module.exports = (sequelize, DataTypes) => {
    let Passengers = sequelize.define("Passengers", {
        p_id: DataTypes.STRING,
        p_email: DataTypes.STRING,
        p_firstname: DataTypes.STRING,
        p_lastname: DataTypes.STRING,
        p_address1: DataTypes.STRING,
        p_address2: DataTypes.STRING,
        p_city: DataTypes.STRING,
        p_state: DataTypes.STRING,
        p_zip: DataTypes.STRING
    }, {
            timestamps: false
        });
    return Passenger;
};
