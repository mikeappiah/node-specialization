const express = require('express');
const productController = require('./controllers/productController');

const app = express();

app.use(express.json());

app.get('/products', productController.getAllProducts);
app.get('/products/:id', productController.getProduct);
app.post('/products', productController.createProduct);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server is running at port ${PORT}`);
});
