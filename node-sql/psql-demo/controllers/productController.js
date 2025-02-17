const Product = require('../model/productModel');

exports.getAllProducts = async (req, res) => {
	try {
		const products = await Product.getAll();

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
		const product = await Product.getOne(req.params.id);
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
		await Product.create(
			req.body.name,
			req.body.category,
			req.body.price,
			req.body.quantity
		);
		res.status(201).json({
			status: 'success',
			message: 'product created successfully'
		});
	} catch (error) {
		console.log(error);
	}
};
