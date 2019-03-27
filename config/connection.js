// Connect Node.js to MySQL
let mysql = require('mysql');

let connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
    console.log("jaws db connecting!")
} else {
    console.log("local mySQL connecting!")
    connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: process.env.DB_PASSWORD,
        database: "sunrail"
    });
};

// Make connection
connection.connect();

// Export connection for use by our Object Releational Model (ORM)
module.exports = connection;