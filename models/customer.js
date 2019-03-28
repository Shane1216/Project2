module.exports = (sequelize, DataTypes) => {
    let Customer = sequelize.define("Customer", {
        cust_id: DataTypes.STRING,
        cust_name: DataTypes.STRING,
        cust_address1: DataTypes.STRING,
        cust_address2: DataTypes.STRING,
        cust_city: DataTypes.STRING,
        cust_state: DataTypes.STRING,
        cust_zip: DataTypes.STRING,
    }, {
            timestamps: false
        });
    return Customer;
};
