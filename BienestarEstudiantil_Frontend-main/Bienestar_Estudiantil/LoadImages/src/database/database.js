// Call required libraries
import mysql from 'mysql2/promise';
import config from "../config";

// Create connection to database
const conex = mysql.createConnection({
    host: config.server,
    database: config.database,
    user: config.user,
    password: config.password
});


// Export connection
const getConnection = async () => { return conex; }
module.exports = { getConnection };
