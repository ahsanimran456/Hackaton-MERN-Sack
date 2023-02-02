import mongoose from 'mongoose';
import express from "express";
import { Users } from './Adduser.js';
function Getusers(req, res) {
    Users.find({},(err,data)=>{
        if(!err){
            res.send(data)
        }
        else{
            res.status(500).send("server error")
        }
    })
}

export default Getusers;