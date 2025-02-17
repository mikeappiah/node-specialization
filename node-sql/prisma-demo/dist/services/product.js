import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
// Create a new product
export const createProduct = async (data) => {
    return prisma.product.create({
        data
    });
};
// Get all products
export const getAllProducts = async () => {
    return prisma.product.findMany();
};
// Get products by category
export const getProductsByCategory = async (category) => {
    return prisma.product.findMany({
        where: { category }
    });
};
// Update a product
export const updateProduct = async (id, data) => {
    return prisma.product.update({
        where: { id },
        data
    });
};
// Delete a product
export const deleteProduct = async (id) => {
    return prisma.product.delete({
        where: { id }
    });
};
//# sourceMappingURL=product.js.map