import { ProductCategory } from '@prisma/client';

export interface CreateProductInput {
	name: string;
	price: number;
	quantity: number;
	category: ProductCategory;
}

export interface UpdateProductInput {
	name?: string;
	price?: number;
	quantity?: number;
	category?: ProductCategory;
}
