module.exports = function (sequelize, DataTypes) {
    var Sunrail_stop = sequelize.define("Sunrail_stop", {
        trip_id: DataTypes.INTEGER,
        stop_id: DataTypes.INTEGER,
        stop_name: DataTypes.TEXT,
        direction_id: DataTypes.BOOLEAN,
        zone_id: DataTypes.INTEGER
    }, {
        timestamps: false
    });
    return Sunrail_stop;
};