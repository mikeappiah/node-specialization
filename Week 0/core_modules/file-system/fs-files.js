const fs = require('fs');
const fsp = require('fs').promises;

// SYNCHRONOUS/BLOCKING CODE
const readFile = fs.readFileSync('./txt/input.txt', 'utf8'); // reading a file

fs.writeFileSync('./txt/output.txt', 'NEVER GONNA GIVE YOU UPPP!'); // writing to a file

// ASYNCHRONOUS/NON-BLOCKING CODE
fs.readFile('./txt/input.txt', 'utf8', (err, data) => {
	if (err) {
		console.error(err.message);
		return;
	}
	console.log(data);
	return;
}); // reading a file

fs.writeFile('./txt/example.txt', 'NEVER GONNA LET YOU DOWNN!', (err) => {
	if (err) {
		console.error(err);
		return;
	}
	console.log('Done writing file');
}); // writing to a file

fs.unlink('./txt/newfile.txt', (err) => {
	if (err) {
		// console.error(err.message);
		return;
	}
	console.log('File deleted!');
}); // deleting a file

fs.rename('./txt/hahaha.txt', './txt/lol.txt', (err) => {
	if (err) {
		// console.error(err.message);
		return;
	}
	console.log('File renamed!');
}); // renaming a file

fs.appendFile('./txt/example.txt', 'Appended text\n', (err) => {
	if (err) {
		console.error(err);
		return;
	}
	console.log('Data appended!');
}); // add data to the end of a file

// USING PROMISES BASED VERSION OF FS METHODS
async function readFromFile() {
	try {
		const data = await fsp.readFile('./txt/input.txt', 'utf8');
		console.log(data);
	} catch (err) {
		console.error(err);
	}
}

readFromFile();
