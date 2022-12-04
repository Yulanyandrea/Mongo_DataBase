import express from 'express';
import configExpress from './config/express';
import conectDb from './config/database';

const app=express();
const port= process.env.PORT || 8080;

configExpress(app)
conectDb();

app.listen(port,()=>{
  console.log(`Server is running on port ${port}`)
})

