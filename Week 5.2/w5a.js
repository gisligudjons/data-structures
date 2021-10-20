const async = require('async');

var workoutEntries = [];
class workoutEntry {
  constructor(primaryKey, sortKey, user, date, workoutNumber, workoutType, excersise1, excersise2, reps, weight,sets, entry, happy, iate) {
    this.pk = {};
    this.pk.S = primaryKey;
    this.sk = {};
    this.sk.S= sortKey
    this.user = {};
    this.user.S = user;
    this.date = {}; 
    this.date.S = new Date(date).toDateString();
    this.workoutNumber = {};
    this.workoutNumber.S = workoutNumber;
    this.workoutType = {};  
    this.workoutType.S = workoutType;
    this.excersise1 = {};
    this.excersise1.S = excersise1;
    this.excersise2 = {}; 
    this.excersise2.S = excersise2;
    this.reps = {};
    this.reps.S = reps;
    this.weight = {};
    this.weight.S = weight;
    this.sets = {};
    this.sets.S = sets;
  }
}

workoutEntries.push(new workoutEntry('0', 'fun!', 'Gisli', 'October 9 2021', '0', "Upper Body",  'Bench Press', 'Dips', '8', '85 kg', '3'));
workoutEntries.push(new workoutEntry('1', 'fun!', 'Gisli', 'October 10 2021', '1', "Lower Body",  'Squat', 'Deadlift', '7', '185 kg', '3'));
workoutEntries.push(new workoutEntry('2', 'fun!', 'Gisli', 'October 11 2021', '2', "Upper Body",  'Pull ups', 'Ab crunches', '14', 'Bodyweight', '3'));
workoutEntries.push(new workoutEntry('3', 'fun!', 'Gisli', 'October 12 2021', '3', "Lower Body",  'Hip Thrust', 'Leg extensions', '23', '25 kg', '3'));

console.log(workoutEntries);

var AWS = require('aws-sdk');
AWS.config = new AWS.Config();
AWS.config.region = "us-east-1";

var dynamodb = new AWS.DynamoDB();

//Create function that sends it to Dynamo
//Forget about sort key, will be fun! for now for the sake of time. Will need to adjust later on,

async.eachSeries(workoutEntries, function(value, callback) {
    var params = {};
    params.Item = value; 
    params.TableName = "processblog";
    
    //Taken from starter code:
    dynamodb.putItem(params, function (err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else     console.log(data);           // successful response
    });
    setTimeout(callback, 1000); 
}); 
