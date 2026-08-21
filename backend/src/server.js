// const express = require('express'); 
// const mongoose = require('mongoose'); 
//  require("dotenv").config();
// const cookieParser = require('cookie-parser'); 
// const cors=require('cors') 
 
// mongoose.connect(
//   'mongodb://sreenandhuvenu37_db_user:pREVmCf3vspeJHcS@ac-zno92ej-shard-00-00.vcat9bh.mongodb.net:27017,ac-zno92ej-shard-00-01.vcat9bh.mongodb.net:27017,ac-zno92ej-shard-00-02.vcat9bh.mongodb.net:27017/?ssl=true&replicaSet=atlas-10zuu9-shard-0&authSource=admin&appName=ecommerc')
//   .then(()=>console.log('mogo connected')) 
// .catch((error)=>console.log(error)) 
 
// const app=express() 
// const PORT = process.env.PORT || 5000;
// app.use( 
//   cors({ 
//     origin:'http://localhost:5173/',
//     methods:['GET','POST','DELETE','PUT'],
//     allowedHeaders:[
//      'Content-Type',
//      'Authorization',
//      'Cache-Control',
//      'Expires',
//      'Pragma'

//     ],
//     credentials:true
//   })
// );
// app.use(cookieParser());
// app.use(express.json());
// app.listen(PORT,()=>console.log('server is running'))
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

const app = express();

const PORT = process.env.PORT || 5000;

// MongoDB
connectDB();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());


// Test route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "E-commerce backend is running",
  });
});
app.use("/api/products", productRoutes);
// START SERVER
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});