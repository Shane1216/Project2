// Connect all the models/tables in the database to a db object, 
//so everything is accessible via one object
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models/tables
db.sunrail_stops = require('../models/sunrail_stop.js')(sequelize, Sequelize);
db.schedule = require('../models/schedule.js')(sequelize, Sequelize);
db.stop_times = require('../models/stop_times.js')(sequelize, Sequelize);
db.customer = require('../models/customer')(sequelize, Sequelize);
db.payment = require('../models/payment')(sequelize, Sequelize);

//Relations
db.stop_times.belongsTo(db.sunrail_stops);
db.sunrail_stops.hasMany(db.stop_times);
db.payment.belongsTo(db.customer);
db.customer.hasMany(db.payment);

module.exports = db;