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
  
-Export the result to a text file and save it in the directory
