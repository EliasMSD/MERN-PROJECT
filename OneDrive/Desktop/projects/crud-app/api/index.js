const express=require("express");
const mongoose=require("mongoose");
const cors=require('cors');
require("dotenv").config();


const app=express();
//middlewares
app.use(express.json());
app.use(cors());

//DB CONNECTION
// mongoose.connect(process.env.MONGODB_URI,{
// 	useNewUrlParser:true,
// 	useUnifiedTopology:true
// },()=>console.log("connected successfully"))

app.listen(process.env.PORT,()=>console.log(`server is runing on ${process.env.PORT} `))
