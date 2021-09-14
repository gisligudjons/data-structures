
//My zone is number 3

// npm install cheerio

var fs = require('fs');
var cheerio = require('cheerio');

// load the addresses file into a variable, `content`
// this is the file that we created in the starter code from last week
// My dataset will be from zone 3 
var content = fs.readFileSync('data/m03.txt');

// load `content` into a cheerio object
var $ = cheerio.load(content);

// write the street addresses to a text file
var streetAddress = ''; // this variable will hold the lines of text
//Making sure the variable is an array for later 
var streetAddress = Object.values(streetAddress)

//Remove an uneccessary "home" heading and other headings.
$("a").remove();

//The main function that locates the required information. This code locates the correct information and also does a bit of cleaning (see the last split. function)
$('td').each(function(i, elem) {
    
    if ($(elem).text().split('\n')[3] !== undefined){
        streetAddress += $(elem).text().split("\n")[3].replace(/\n\n/g, "\n").trim().split(',')[0] + '\n';
    }
    
});

console.log(streetAddress)

//Here we write the result to a text file
fs.writeFileSync('data/streetAddress.txt', streetAddress);





