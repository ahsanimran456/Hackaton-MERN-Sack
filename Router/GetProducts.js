import mongoose from 'mongoose';
import express from "express";
import { Products } from './AddProduct.js';

function GetProducts(req, res) {
    Products.find({},(err,data)=>{
        if(!err){
            res.send(data)
        }
        else{
            res.status(500).send("server error")
        }
    })
}
export default GetProducts