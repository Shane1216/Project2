module.exports = function (sequelize, DataTypes) {
    var Sunrail_stop = sequelize.define("Sunrail_stop", {
        trip_id: DataTypes.INT,
        stop_id: DataTypes.INT,
        stop_name: DataTypes.TEXT,
        arrival_time: DataTypes.TEXT,
        departure_time: DataTypes.TEXT,
        zone_id: DataTypes.INT
    });
    return Sunrail_stop;
};