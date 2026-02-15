import express from 'express';
import { dbConnect } from './config/db.js';

const app = express();
const PORT = 4000;

dbConnect();//calling the function to connect to db
app.listen(PORT,()=>console.log(`Server is running on port : ${PORT}`));