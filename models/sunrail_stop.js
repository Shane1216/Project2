module.exports = function (sequelize, DataTypes) {
    var Sunrail_stops = sequelize.define("Sunrail_stops", {
        trip_id: DataTypes.INTEGER,
        stop_id: DataTypes.INTEGER,
        stop_name: DataTypes.TEXT,
        direction_id: DataTypes.BOOLEAN,
        zone_id: DataTypes.INTEGER
    }, {
        timestamps: false
    });
    return Sunrail_stops;
};