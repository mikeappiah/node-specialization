const fs = require('node:fs');

fs.stat('./txt/example.txt', (err, stats) => {
	if (err) {
		console.error(err);
		return;
	}
	console.log('File stats:', stats);
}); // used to retrieve metadata about files or directories

fs.access('./txt/example.txt', fs.constants.F_OK, (err) => {
	console.log(err ? 'File does not exist' : 'File exists');
}); // check if a file or directory exists and if you have the right permissions
