Hello All!

This weeks assignment was to go through one of the the worst websites Aron could find and parse through the data to get the desired information
In this case the desired information is the address for the AA meetings. The addresses should then be placed in an txt.file  for easy reading

The main goal of the excercise/assignemnt is to learn heavy data parsing and using cheerio and other javascript language functions.

Method
-install cheerio and create two variables: fs, and cheerio.
-load the addresses file into a variable, `content`, and then load that variable into a cheerio object named $
-Create a variable named streetAddress that contain the lines of text (the addresses themselves)
-Create a function that parses through the data and fetches only the street addresses. 
  -Do some trimming if necessary


//Remove an uneccessary "home" heading and other headings.
$("a").remove();

//The main function that locates the required information. This code locates the correct information and also does a bit of cleaning (see the last split. function)
$('td').each(function(i, elem) {
    
    if ($(elem).text().split('\n')[3] !== undefined){
        streetAddress += $(elem).text().split("\n")[3].replace(/\n\s/g, " ").trim().split(',')[0] + '\n';
    }
    
});

console.log(streetAddress)

//Here we write the result to a text file
fs.writeFileSync('data/streetAddress.txt', streetAddress);