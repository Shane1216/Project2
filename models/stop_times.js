module.exports = (sequelize, DataTypes) => {
    let Stop_times = sequelize.define("Stop_times", {
        trip_id: DataTypes.INTEGER,
        stop_id: DataTypes.INTEGER,
        arrival_time: DataTypes.TIME,
        departure_time: DataTypes.TIME,
        stop_sequence: DataTypes.INTEGER,
        pickup_type: DataTypes.INTEGER,
        drop_off_type: DataTypes.INTEGER
    }, {
            timestamps: false
        });
    return Stop_times;
};
