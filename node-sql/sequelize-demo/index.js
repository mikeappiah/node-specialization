const express = require('express');
const productController = require('./controllers/productController');

const app = express();

app.use(express.json());

app.get('/api/products', productController.getAllProducts);
app.get('/api/products/:id', productController.getProduct);
app.post('/api/products', productController.createProduct);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server is running at port ${PORT}`);
});
