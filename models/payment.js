module.exports = (sequelize, DataTypes) => {
    let Payment = sequelize.define("Payment", {
        pay_id: DataTypes.STRING,
        cust_id: DataTypes.STRING,
        pay_type: DataTypes.STRING,
        pay_amt: DataTypes.STRING
    }, {
            timestamps: false
        });
    return Payment;
};
