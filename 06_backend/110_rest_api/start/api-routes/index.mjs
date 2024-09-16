import express from 'express';
import productsRoutes from './products.mjs';

const apiRoutes = express.Router();
apiRoutes.use('/products', productsRoutes);

export default apiRoutes;