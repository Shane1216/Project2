module.exports = function(sequelize, DataTypes) {
  var sunrail = sequelize.define("sunrail", {
    trip_id: DataTypes.TEXT,
    stop_id: DataTypes.TEXT,
    stop_name: DataTypes.TEXT,
    arrival_time: DataTypes.TEXT,
    departure_time: DataTypes.TEXT,
    zone_id: DataTypes.TEXT
  },{
    timestamps: false
  });
  return sunrail;
};
