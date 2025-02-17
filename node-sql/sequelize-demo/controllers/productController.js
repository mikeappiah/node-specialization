const Product = require('../model/productModel');

exports.getAllProducts = async (req, res) => {
	try {
		const products = await Product.findAll();
		res.status(200).json({
			status: 'success',
			results: products.length,
			data: {
				data: products
			}
		});
	} catch (error) {
		console.log(error);
	}
};

exports.getProduct = async (req, res) => {
	try {
		const product = await Product.findByPk(req.params.id);
		res.status(200).json({
			status: 'success',
			data: {
				data: product
			}
		});
	} catch (error) {
		console.log(error);
	}
};

exports.createProduct = async (req, res) => {
	try {
		const newProduct = await Product.create(req.body);
		res.status(201).json({
			status: 'success',
			data: {
				data: newProduct
			}
		});
	} catch (error) {
		console.log(error);
	}
};
