import mongoose from 'mongoose';
import express from "express";
import { Products } from './AddProduct.js';

async function Editproduct (req, res){
    const EditproductID = req.params.id
    const body = req.body
    console.log(EditproductID)
    console.log(body)
    if (body.ProductName && body.Category && body.Price && body.Description) {
        try {
            let editproduct = await Products.findByIdAndUpdate(EditproductID,{
                ProductName: body.ProductName,
                Category: body.Category,
                Price: body.Price,
                Description: body.Description,      
            },{new:true})
            console.log("updated data", editproduct)
            res.send({ message: "Product edit successfully" })
        }
        catch (error){
                res.send ({
                    message:"Server error"
                })
        }

    }
    else {
        res.status(500).send({ message: "Required parameter is missing" })
    }

}

export default Editproduct;