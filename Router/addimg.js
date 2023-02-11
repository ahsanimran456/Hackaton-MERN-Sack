import mongoose from 'mongoose';
import express from "express";
const app = express()
import multer from 'multer';
import Bucket from '../FirebaseAdmin/Firebase.js';
import fs from "fs"



const prodictimgSchema = mongoose.Schema(
    {
        // ProductName: { type: String, required: true },
        Category: { type: String, required: true, },
        url: { type: String, required: true, },
        // Price: { type: Number, required: true },
        // Description: { type: String, required: true },
    },
    { timestamps: true }
);

const Products = mongoose.model("imgproducts", prodictimgSchema);

function addimg(req, res) {
    const body = req.body
    console.log(body)
    try {
        console.log("req.body: ", req.body);
        // console.log("req.body: ", JSON.parse(req.body.myDetails));
        console.log("req.files: ", req.files);

        console.log("uploaded file name: ", req.files[0].originalname);
        console.log("file type: ", req.files[0].mimetype);
        console.log("file name in server folders: ", req.files[0].filename);
        console.log("file path in server folders: ", req.files[0].path);

        Bucket.upload(
            req.files[0].path,
            {
                destination: `products/${req.files[0].filename}`, // give destination name if you want to give a certain name to file in bucket, include date to make name unique otherwise it will replace previous file with the same name
            },
            function (err, file, apiResponse) {
                if (!err) {
                    file.getSignedUrl({
                        action: 'read',
                        expires: '03-09-2491'
                    }).then(async (urlData, err) => {
                        if (!err) {
                            console.log("public downloadable url: ", urlData[0]) // this is public downloadable url 
                            try {
                                fs.unlinkSync(req.files[0].path)
                                //file removed
                            } catch (err) {
                                console.error(err)
                            }
                            try {
                                const addproductDb = await Products.create({
                                    Category: body.Category,
                                    url: urlData[0]

                                })
                                res.status(200).send({ message: 'Product Added Successfully', data: addproductDb })
                            }
                            catch (err) {
                                console.log(err);
                                res.send({ message: 'Server Error' })
                            }


                        }
                    })
                } else {
                    console.log("err: ", err)
                    res.status(500).send();
                }
            });

    }
    catch (err) {
        console.log(err)
    }
    // if (body.ProductName && body.Category && body.Price && body.Description) {
    //     Products.findOne({ ProductName: body.ProductName }, async (err, product) => {
    //         if (!err) {
    //             // ........when product exits .....//
    //             if (product) {
    //                 console.log("user exist is db ")
    //                 res.send({ message:"Product is Already token" })
    //             }
    //             // ........when Product does not exits .....//
    //             else {
    //                 try {
    //                     const addproductDb = await Products.create({
    //                         ProductName: body.ProductName,
    //                         Category: body.Category,
    //                         Price: body.Price,
    //                         Description: body.Description,
    //                     })
    //                     res.status(200).send({ message: 'Product Added Successfully', data: addproductDb })
    //                 }
    //                 catch (err) {
    //                     console.log(err);
    //                     res.send({ message: 'Server Error' })
    //                 }
    //             }
    //         }
    //     })
    // } else {
    //     res.send({ message: "Required parameter is missing" })
    // }
}

export { addimg, Products };