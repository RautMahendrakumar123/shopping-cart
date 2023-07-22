const express = require('express');
const prodModel = require('../models/productModel');

const router=express.Router()

router.post("/api/product",async (req,res)=>{
    try{
         const data = await new prodModel(req.body)
         data.save()
         res.status(200).json({
            status:"save successfully"
         })
    }catch(err){
        res.status(400).json({
            message:err.message
        })
    }
})

router.get("/api/prod",async (req,res)=>{
    try{
        const data = await prodModel.find()
        res.json(data)
    }catch(err){
        res.status(400).json({
            message:err.message
        })
    }
})

module.exports=router