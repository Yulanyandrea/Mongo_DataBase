import express, {Application} from 'express';
import morgan from 'morgan';
import * as dotenv from 'dotenv';

dotenv.config();

function configExpress(app: Application){
  app.use(express.json());
  app.use(morgan('dev'));
}
export default configExpress;
