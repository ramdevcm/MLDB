const knex = require('knex');

const mysql = knex({
  // Enter your own database information here based on what you created and run the SQL_Statements to create the tables
  client: 'mysql',
  connection: {
    host : '13.233.91.196',           // Your hostname
    port : 3306,
    user : 'fasal',                // Your user name
    password : 'password',    // Your password
    database : 'mldb'
  }
});

module.exports = { mysql };