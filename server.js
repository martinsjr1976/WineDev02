const express=require('express');
const dotenv=require('dotenv');
const morgan=require('morgan');
const bodyparser=require("body-parser");
const path=require('path');
const connectDB = require('./server/database/connection');
require("dotenv").config();

const app=express();


const PORT=process.env.PORT || 3000

//log requests
app.use(morgan('tiny'));

//mongodb connection
connectDB();

//parse request to body-parser
app.use(bodyparser.urlencoded({extended : true}))

//set view engine
app.set("view engine", "ejs")
//app.set("views", path.resolve(__dirname, "views"))

//load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))
// app.use('/include', express.static(path.resolve(__dirname, "views/include")))

//load routers
app.use('/', require('./server/routes/router'))

app.listen(3000, ()=> {console.log(`Server is runnning on http://localhost:${PORT}`)});
