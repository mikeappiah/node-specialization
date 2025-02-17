import { Request, Response } from 'express';
import { ProductCategory } from '@prisma/client';
import {
	createProduct,
	getAllProducts,
	getProductsByCategory,
	updateProduct,
	deleteProduct
} from '../services/product.js';

import { CreateProductInput, UpdateProductInput } from '../types/product.js';

// Create a new product
export const createProductHandler = async (req: Request, res: Response) => {
	try {
		const data: CreateProductInput = req.body;
		const product = await createProduct(data);
		res.status(201).json({
			status: 'success',
			data: product
		});
	} catch (error) {
		res.status(400).json({ error: 'Failed to create product' });
	}
};

// Get all products
export const getAllProductsHandler = async (req: Request, res: Response) => {
	try {
		const products = await getAllProducts();

		res.status(200).json({
			status: 'success',
			data: products,
			results: products.length
		});
	} catch (error) {
		res.status(500).json({ error: 'Failed to fetch products' });
	}
};

// Get products by category
export const getProductsByCategoryHandler = async (
	req: Request,
	res: Response
) => {
	try {
		const { category } = req.params;
		const products = await getProductsByCategory(category as ProductCategory);
		res.status(200).json({
			status: 'success',
			data: products
		});
	} catch (error) {
		res.status(500).json({ error: 'Failed to fetch products by category' });
	}
};

// Update a product
export const updateProductHandler = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const data: UpdateProductInput = req.body;
		const product = await updateProduct(parseInt(id), data);
		res.status(200).json({
			status: 'success',
			data: product
		});
	} catch (error) {
		res.status(400).json({ error: 'Failed to update product' });
	}
};

// Delete a product
export const deleteProductHandler = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		await deleteProduct(parseInt(id));
		res.status(204).send({
			status: 'success',
			data: null
		});
	} catch (error) {
		res.status(400).json({ error: 'Failed to delete product' });
	}
};
