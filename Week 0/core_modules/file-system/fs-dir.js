const fs = require('fs');

fs.mkdir(
	'newdirectory',
	{
		recursive: true /* All the necessary parent directories if they don't already exist. */
	},
	(err) => {
		if (err) {
			console.error(err);
			return;
		}
		console.log('Directory created!');
	}
); // creating a directory

fs.rm('newdirectory', { recursive: true, force: true }, (err) => {
	if (err) {
		console.error(err);
		return;
	}
	console.log('Directory removed!');
}); // removing directories(could also be rmdir)

fs.readdir('.', (err, files) => {
	if (err) {
		console.error(err);
		return;
	}
	console.log('Directory contents:', files);
}); // reading contents of directory
