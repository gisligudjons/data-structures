

//PART A CODE - CREATES THE TABLE IN POSGRESQL
const { Client } = require('pg');
const dotenv = require('dotenv');
dotenv.config({path: '../.env'});  
var async = require('async');  
// AWS RDS POSTGRESQL INSTANCE
var db_credentials = new Object();
db_credentials.user = 'gisli';
db_credentials.host = 'datastructures.ccqj3djz0ass.us-east-1.rds.amazonaws.com';
db_credentials.database = 'AA';
db_credentials.password = process.env.PW;
db_credentials.port = 5432;


//7 East 10th Street
//155 East 22nd Street
//61 Fourth Avenue

//40,7332541	-73,99482302
//40,7385487	-73,98431077
//40,82468599	-73,80810953

var addressesForDb = [ { address: '7 East 10th Street', latLong: { lat: 40.7332541, lng: -73.99482302 } }, { address: '155 East 22nd Street', latLong: { lat: 40.7385487, lng: -73.98431077 } }, { address: '61 Fourth Avenue', latLong: { lat: 40.82468599, lng: -73.80810953 } } ];

async.eachSeries(addressesForDb, function(value, callback) {
    const client = new Client(db_credentials);
    client.connect();
    var thisQuery = "INSERT INTO aalocations VALUES (E'" + value.address + "', " + value.latLong.lat + ", " + value.latLong.lng + ");";
    client.query(thisQuery, (err, res) => {
        console.log(err, res);
        client.end();
    });
    setTimeout(callback, 1000); 
}); 