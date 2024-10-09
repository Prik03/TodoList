const express=require('express');
const mongoose=require("mongoose");
const cors=require('cors');
const dotenv=require('dotenv');
const connectDB=require('./config/db');
const todoRoutes=require('./routes/todoRoutes');

dotenv.config();
connectDB();
const app=express();
app.use(express.json());
app.use(cors());

app.use('/api/todo',todoRoutes);


const PORT= process.env.PORT || 3000;


app.listen(PORT,()=>{
    console.log(`Server is running ${PORT}`);
})