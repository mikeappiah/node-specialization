import { PrismaClient, ProductCategory } from '@prisma/client';

import { CreateProductInput, UpdateProductInput } from '../types/product.js';

const prisma = new PrismaClient();

// Create a new product
export const createProduct = async (data: CreateProductInput) => {
	return prisma.product.create({
		data
	});
};

// Get all products
export const getAllProducts = async () => {
	return prisma.product.findMany();
};

// Get products by category
export const getProductsByCategory = async (category: ProductCategory) => {
	return prisma.product.findMany({
		where: { category }
	});
};

// Update a product
export const updateProduct = async (id: number, data: UpdateProductInput) => {
	return prisma.product.update({
		where: { id },
		data
	});
};

// Delete a product
export const deleteProduct = async (id: number) => {
	return prisma.product.delete({
		where: { id }
	});
};
