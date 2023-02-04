import mongoose from 'mongoose';
import express from "express";
const app = express()
const productSchema = mongoose.Schema(
    {
        ProductName: { type: String, required: true },
        Category: { type: String, required: true, },
        Price: { type: Number, required: true },
        Description: { type: String, required: true },
    },
    { timestamps: true }
);

const Products = mongoose.model("Products", productSchema);

function AddProducts(req, res) {
    const body = req.body
    console.log(body)
    if (body.ProductName && body.Category && body.Price && body.Description) {
        Products.findOne({ ProductName: body.ProductName }, async (err, product) => {
            if (!err) {
                // ........when product exits .....//
                if (product) {
                    console.log("user exist is db ")
                    res.send({ message:"Product is Already token" })
                }
                // ........when Product does not exits .....//
                else {
                    try {
                        const addproductDb = await Products.create({
                            ProductName: body.ProductName,
                            Category: body.Category,
                            Price: body.Price,
                            Description: body.Description,
                        })
                        res.status(200).send({ message: 'Product Added Successfully', data: addproductDb })
                    }
                    catch (err) {
                        console.log(err);
                        res.send({ message: 'Server Error' })
                    }
                }
            }
        })
    } else {
        res.send({ message: "Required parameter is missing" })
    }
}

export {AddProducts,Products};