import product from './api/products';
import user from './api/user';
import { Application } from 'express';

function routes(app:Application) {
  app.use('/api/users', user);
  app.use('/api/products',product)

}

export default routes;
