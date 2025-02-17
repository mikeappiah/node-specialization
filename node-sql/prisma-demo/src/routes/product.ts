import express from 'express';
import {
	getAllProductsHandler,
	createProductHandler,
	deleteProductHandler,
	getProductsByCategoryHandler,
	updateProductHandler
} from '../controllers/product.js';

const router = express.Router();

router.route('/').get(getAllProductsHandler).post(createProductHandler);

router.route('/:category').get(getProductsByCategoryHandler);

router.route('/:id').patch(updateProductHandler).delete(deleteProductHandler);

export default router;
