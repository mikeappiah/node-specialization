const http = require('http');
const fs = require('fs');

const products = fs.readFileSync('./products.json', 'utf8');

const server = http.createServer((req, res) => {
	const { url } = req;
	if (url === '/') {
		res.writeHead(200, {
			'Content-Type': 'text/plain'
		});

		res.write('This is the homepage');
		res.end();
	} else if (url === '/products') {
		res.writeHead(200, {
			'Content-Type': 'text/html'
		});
		res.write('<h1>This is the products page</h1>');
	} else if (url === '/api') {
		res.writeHead(200, {
			'Content-type': 'application/json'
		});
		res.end(products);
	} else {
		res.writeHead(404, {
			'Content-Type': 'text/html'
		});
		res.end('<h1>Page not found!</h1>');
	}
});

// port, hostname, callback
server.listen(8000, '127.0.0.1', () => {
	console.log('Server is running at http://localhost:8000/');
});
