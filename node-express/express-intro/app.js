import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import expressEjsLayouts from 'express-ejs-layouts';
import products from './data/products.js';

const app = express();

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the directory name

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* serving static files in express */
app.use(express.static(path.join(__dirname, 'public')));

/* virtual path prefix */
// app.use('/static', express.static('public'));
// With this all requests for static assets must include /static in the URL

app.get('/', (req, res) => {
	// res.json('Hello World');
	res.render('index', { title: 'Homepage' });
});

app.get('/products', (req, res) => {
	res.render('products', { products });
});

// ejs doesnt natively support the use of layouts
app.use(expressEjsLayouts);

/* specify custom layout path */
app.set('layout', 'layouts/layout');

app.get('/about', (req, res) => {
	res.render('about', { layout: 'layouts/layout' });
});

const PORT = 8000;

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
