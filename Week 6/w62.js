
   
// npm install aws-sdk
var AWS = require('aws-sdk');
AWS.config = new AWS.Config();
AWS.config.region = "us-east-1";

var dynamodb = new AWS.DynamoDB();

//queries the first entry made in process blog 
var params = {
    TableName : "processblog",
    KeyConditionExpression: " pk = :idNum", // the query expression
    FilterExpression: "workoutType = :type",
    ExpressionAttributeValues: { // the query values
        //":topicName": {S: "weather"}
        ":idNum": {S: "0"},
        ":type": {S: "Upper Body"}
    }
};


//connects to the dynamo database and returns the query result
dynamodb.query(params, function(err, data) {
    if (err) {
        console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
    } else {
        console.log("Query succeeded.");
        data.Items.forEach(function(item) {
            console.log("***** ***** ***** ***** ***** \n", item);
        });
    }
});