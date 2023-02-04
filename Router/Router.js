import express from "express";
import {Adduser} from "./Adduser.js";
import Getusers from "./Getusers.js";
import Deleteuser from "./Deleteuser.js";
import {AddProducts} from "./AddProduct.js";
import GetProducts from "./GetProducts.js";
import mongoose from 'mongoose';


const Router = express.Router();

Router.post("/adduser",Adduser);
Router.delete("/deleteuser/:id",Deleteuser)
Router.get("/getusers",Getusers);
Router.post("/addproducts",AddProducts)
Router.get("/getproducts",GetProducts)


export default Router