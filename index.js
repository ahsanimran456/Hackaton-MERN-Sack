import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config() 
import Router from "./Router/Router.js";
import cors from "cors"
import cookieParser from 'cookie-parser'
import multer from 'multer';


const port = process.env.PORT
const dbpass = process.env.DBPASS
const app = express()
app.use(cors({
    origin:["http://localhost:3000","*"],
    credentials:true
}));

app.use(express.json());
app.use(cookieParser())


mongoose.connect(`mongodb+srv://ahsanimran:hackaton@cluster0.yoej8bl.mongodb.net/Hackaton?retryWrites=true&w=majority`)
    .then(() => console.log("Connected !!"))
    .catch((err) => console.log("err ===>", err))


app.use("/", Router)

app.use("/", (req, res) => {
    res.send(new Date());
});


app.listen(port, () => {
    console.log(`server is running on port!${port}`);
});   