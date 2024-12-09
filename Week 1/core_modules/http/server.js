const http = require('node:http');
const fs = require('node:fs');

const products = fs.readFileSync(`${__dirname}/products.json`, 'utf8');

const server = http.createServer((req, res) => {
	const { url, method } = req;
	if (url === '/' && method === 'GET') {
		res.writeHead(200, {
			'Content-Type': 'text/plain'
		});

		res.write('This is the homepage');
		res.end();
	} else if (url === '/products' && method === 'GET') {
		res.writeHead(200, {
			'Content-Type': 'text/html'
		});
		res.write(`
			<!DOCTYPE html>
			<html>
				<body>
					<h1>This is the products page</h1>
				</body>
			</html>
			`);
	} else if (url === '/api/products' && method === 'GET') {
		res.writeHead(200, {
			'Content-type': 'application/json'
		});
		res.end(products);
	} else if (url === '/api/products' && method === 'POST') {
		let body = '';

		req.on('error', (err) => {
			console.error(err);
			res.statusCode = 400;
			res.end();
		});
		req.on('data', (chunk) => {
			body += chunk.toString();
		});
		req.on('end', () => {
			const newProduct = JSON.parse(body);
			// Here you could save the new user to the database
			res.writeHead(201, { 'Content-Type': 'application/json' });
			res.end(
				JSON.stringify({ message: 'Product added', product: newProduct })
			);
		});

		// we could also chain the multiple event emitters e.g req.on(..).on(...)
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});
		res.end(JSON.stringify({ message: 'Route not defined' }));
	}
});

// port, hostname, callback
server.listen(8000, '127.0.0.1', () => {
	console.log('Server is running at http://localhost:8000/');
});
