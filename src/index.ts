import * as dotenv from 'dotenv';
import express from 'express';
import configExpress from './config/express';
import conectDb from './config/database';
import routes from './routes';

dotenv.config();

const app=express();
const port= process.env.PORT || 3000;

// setup express
configExpress(app)
//connect to mongo
conectDb();
//setup routes
routes(app);



app.listen(port,()=>{
  console.log(`Server is running on port ${port}`)
})

