const fs = require('fs');

// CREATING A READ STREAM FOR LARGE DATA
const readStream = fs.createReadStream('./txt/largefile.txt', {
	encoding: 'utf8'
});

// readStream.on('data', (chunk) => {
// 	console.log('Received chunk:', chunk);
// });

// STREAMING DATA INTO A FILE
const writeStream = fs.createWriteStream('./txt/write-stream.txt');
writeStream.write('Hello, ');
writeStream.write('World!');
writeStream.end();
