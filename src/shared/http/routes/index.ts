import productsRouter from '@modules/products/routes/products.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/products', productsRouter);

routes.get('/', (request, response) => {
  return response.json({ message: 'hello dev!' });
});

export default routes;
