const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config()
const app = express();

app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('connect to DB')
})
.catch((err)=>{
    console.log(err)
})

app.listen(process.env.PORT,()=>{
    console.log('server running on port'+process.env.PORT)
})