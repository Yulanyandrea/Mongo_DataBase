import product from './api/products';
import user from './api/user';
import { Application } from 'express';
import authLocal from './auth/local';

function routes(app:Application) {
  app.use('/api/users', user);
  app.use('/api/products',product);
  app.use('/auth/local',authLocal);

}

export default routes;
