const { writeFile } = require('fs');
const { argv } = require('yargs');

// read environment variables from .env file
require('dotenv').config();

// read the command line arguments passed with yargs
const environment = argv.environment;
const isProduction = environment === 'prod';

const targetPath = isProduction
	? './src/environments/environment.prod.ts'
	: './src/environments/environment.ts';

// access to environment variables in the process.env object thanks to dotenv
const environmentFileContent = `
    export const environment = {
        production: ${isProduction},
        API_URL: "${process.env.API_URL}"
    }`;

// write the content to the respective file
writeFile(targetPath, environmentFileContent, function (err) {
	if (err) {
		console.log(err);
	}

	console.log(`Wrote variables to ${targetPath}`);
});
