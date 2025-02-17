import express from 'express';
import productRouter from './routes/product.js';
const app = express();
app.use(express.json());
app.use('/api/products', productRouter);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map