import productsRouter from '@modules/products/routes/products.routes';
import sessionsRouter from '@modules/users/routes/session.routes';
import usersRouter from '@modules/users/routes/user.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

routes.get('/', (request, response) => {
  return response.json({ message: 'hello dev!' });
});

export default routes;
