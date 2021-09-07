// npm install got
// mkdir data


// I tried as i could to make it loop. Got stuck when I had to make a separate txt file for each one, it kept overriding the same txt file. This will do for now. 
// 

const fs = require('fs'); //file system package, used to write a file
const got = require('got');


(async () => {
	try {
		const response = await got('https://parsons.nyc/aa/m01.html'); //"get the website" using "got" to 
		console.log(response.body);
		fs.writeFileSync('/home/ec2-user/environment/Data Structure week 01/data/m01.txt', response.body);//Here he is placing it his working directory
		//=> '<!doctype html> ...'
	} catch (error) {
		console.log(error.response.body);
		//=> 'Internal server error ...'
	}
})();



(async () => {
	try {
		const response = await got('https://parsons.nyc/aa/m02.html'); //"get the website" using "got" to 
		console.log(response.body);
		fs.writeFileSync('/home/ec2-user/environment/Data Structure week 01/data/m02.txt', response.body);//Here he is placing it his working directory
		//=> '<!doctype html> ...'
	} catch (error) {
		console.log(error.response.body);
		//=> 'Internal server error ...'
	}
})();

(async () => {
	try {
		const response = await got('https://parsons.nyc/aa/m03.html'); //"get the website" using "got" to 
		console.log(response.body);
		fs.writeFileSync('/home/ec2-user/environment/Data Structure week 01/data/m03.txt', response.body);//Here he is placing it his working directory
		//=> '<!doctype html> ...'
	} catch (error) {
		console.log(error.response.body);
		//=> 'Internal server error ...'
	}
})();

(async () => {
	try {
		const response = await got('https://parsons.nyc/aa/m04.html'); //"get the website" using "got" to 
		console.log(response.body);
		fs.writeFileSync('/home/ec2-user/environment/Data Structure week 01/data/m04.txt', response.body);//Here he is placing it his working directory
		//=> '<!doctype html> ...'
	} catch (error) {
		console.log(error.response.body);
		//=> 'Internal server error ...'
	}
})();

(async () => {
	try {
		const response = await got('https://parsons.nyc/aa/m05.html'); //"get the website" using "got" to 
		console.log(response.body);
		fs.writeFileSync('/home/ec2-user/environment/Data Structure week 01/data/m05.txt', response.body);//Here he is placing it his working directory
		//=> '<!doctype html> ...'
	} catch (error) {
		console.log(error.response.body);
		//=> 'Internal server error ...'
	}
})();

(async () => {
	try {
		const response = await got('https://parsons.nyc/aa/m06.html'); //"get the website" using "got" to 
		console.log(response.body);
		fs.writeFileSync('/home/ec2-user/environment/Data Structure week 01/data/m06.txt', response.body);//Here he is placing it his working directory
		//=> '<!doctype html> ...'
	} catch (error) {
		console.log(error.response.body);
		//=> 'Internal server error ...'
	}
})();

(async () => {
	try {
		const response = await got('https://parsons.nyc/aa/m07.html'); //"get the website" using "got" to 
		console.log(response.body);
		fs.writeFileSync('/home/ec2-user/environment/Data Structure week 01/data/m07.txt', response.body);//Here he is placing it his working directory
		//=> '<!doctype html> ...'
	} catch (error) {
		console.log(error.response.body);
		//=> 'Internal server error ...'
	}
})();

(async () => {
	try {
		const response = await got('https://parsons.nyc/aa/m08.html'); //"get the website" using "got" to 
		console.log(response.body);
		fs.writeFileSync('/home/ec2-user/environment/Data Structure week 01/data/m08.txt', response.body);//Here he is placing it his working directory
		//=> '<!doctype html> ...'
	} catch (error) {
		console.log(error.response.body);
		//=> 'Internal server error ...'
	}
})();


(async () => {
	try {
		const response = await got('https://parsons.nyc/aa/m09.html'); //"get the website" using "got" to 
		console.log(response.body);
		fs.writeFileSync('/home/ec2-user/environment/Data Structure week 01/data/m09.txt', response.body);//Here he is placing it his working directory
		//=> '<!doctype html> ...'
	} catch (error) {
		console.log(error.response.body);
		//=> 'Internal server error ...'
	}
})();


(async () => {
	try {
		const response = await got('https://parsons.nyc/aa/m10.html'); //"get the website" using "got" to 
		console.log(response.body);
		fs.writeFileSync('/home/ec2-user/environment/Data Structure week 01/data/m10.txt', response.body);//Here he is placing it his working directory
		//=> '<!doctype html> ...'
	} catch (error) {
		console.log(error.response.body);
		//=> 'Internal server error ...'
	}
})();
