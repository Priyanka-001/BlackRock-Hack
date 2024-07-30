const express=require('express');
const app=express()
const db=require('./db')
require ('dotenv').config()

const studentRouter = require('./Routes/login/user');
const coinRouter=require('./Routes/login/coin');
const buystockRoutes = require('./Routes/login/buystock');
const sellstockRoutes = require('./Routes/login/sellstock');

app.use(express.json()); // Middleware to parse JSON body

const cors = require("cors");
app.use(cors({ credentials: true, origin: ["http://localhost:3001", ""] }));

app.use('/user', studentRouter); // Mount the router
app.use('/user', coinRouter);
app.use('/user', buystockRoutes);
app.use('/user', sellstockRoutes);

const PORT=process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`port listening on port on port  ${process.env.PORT}`)
})