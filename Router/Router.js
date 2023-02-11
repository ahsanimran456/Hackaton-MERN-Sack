import express from "express";
import {Adduser} from "./Adduser.js";
import Getusers from "./Getusers.js";
import Deleteuser from "./Deleteuser.js";
import {AddProducts} from "./AddProduct.js";
import GetProducts from "./GetProducts.js";
import Deleteproducts from "./DeleteProducts.js";
import Editproduct from "./Editproduct.js";
import { Signup } from "./Signup.js";
import { Login } from "./Login.js";
import { addimg } from "./addimg.js";
import mongoose from 'mongoose';
import multer from 'multer';


const storageConfig = multer.diskStorage({ 
    destination: './uploads/',
    filename: function (req, file, cb) {
        console.log("mul-file: ", file);
        cb(null, `${new Date().getTime()}-${file.originalname}`)
    }
})
var uploadmidleware = multer({ storage: storageConfig })

const Router = express.Router();

Router.post("/adduser",Adduser);

Router.post("/signup",Signup);

Router.post("/login",Login);

Router.post("/addproducts",AddProducts)

Router.post("/upload",uploadmidleware.any(),addimg)

Router.get("/getusers",Getusers);

Router.get("/getproducts",GetProducts)

Router.delete("/deleteuser/:id",Deleteuser)

Router.delete("/removeproduct/:id",Deleteproducts)

Router.put("/product/:id",Editproduct)

export default Router