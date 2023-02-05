import mongoose from 'mongoose';
import express from "express";
import { Products } from './AddProduct.js';

function Deleteproducts(req,res) {
    const productsid = req.params.id
    console.log(productsid)
    Products.deleteOne({_id:productsid},(err,data)=>{
        if (!err){
            if (data.deletedCount !== 0) {
                res.send({
                    message:"product has been deleted successfully",
                })
            } else {
                res.send({
                    message:"No product found with this id:" + productsid,
                })
            }
        } else {
            res.status(500).send({
                message: "server error"
            })
        }
    })
}

export default Deleteproducts;