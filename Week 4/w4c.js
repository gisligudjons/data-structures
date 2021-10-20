//PART A CODE - CREATES THE TABLE IN POSGRESQL
const { Client } = require('pg');
const dotenv = require('dotenv');
dotenv.config();  
var async = require('async');  
// AWS RDS POSTGRESQL INSTANCE
var db_credentials = new Object();
db_credentials.user = 'gisli';
db_credentials.host = 'datastructures.ccqj3djz0ass.us-east-1.rds.amazonaws.com';
db_credentials.database = 'AA';
db_credentials.password = process.env.PW;
db_credentials.port = 5432;



// Connect to the AWS RDS Postgres database
const client = new Client(db_credentials);
client.connect();

// Sample SQL statement to query the entire contents of a table: 
var thisQuery = "SELECT * FROM aalocations;";

client.query(thisQuery, (err, res) => {
    console.log(err, res.rows);
    client.end();
});


