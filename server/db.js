const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "",
    host: "localhost",
    port: 5432,
    database: "perntodo"
}); 
//uses db library for easy configuration with our postgres db
module.exports = pool;