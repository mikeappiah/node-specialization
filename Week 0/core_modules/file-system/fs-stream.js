const fs = require('fs');

// CREATING A READ STREAM FOR LARGE DATA
const readStream = fs.createReadStream('./txt/largefile.txt', {
	encoding: 'utf8'
});

readStream.on('data', (chunk) => {
	console.log('Received chunk:', chunk);
});

readStream.on('end', () => {
	console.log('Done reading file');
});
readStream.on('error', (err) => {
	console.error(err.message);
});

// STREAMING DATA INTO A FILE
const writeStream = fs.createWriteStream('./txt/write-stream.txt');
writeStream.write('Hello, ');
writeStream.write('World!');
writeStream.end();

//  READING FROM A FILE AND WRITING TO ANOTHER FILE
// const readable = fs.createReadStream('./txt/input.txt');
// const writable = fs.createWriteStream('./txt/output.txt');

// readable.pipe(writable);
