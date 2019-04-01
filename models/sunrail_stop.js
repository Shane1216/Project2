module.exports = (sequelize, DataTypes) => {
    let Sunrail_stops = sequelize.define("Sunrail_stops", {
        trip_id: DataTypes.INTEGER,
        stop_id: DataTypes.INTEGER,
        stop_name: DataTypes.STRING,
        direction_id: DataTypes.BOOLEAN,
        zone_id: DataTypes.INTEGER
    },
        {
            timestamps: false,
                });
    return Sunrail_stops;
};
