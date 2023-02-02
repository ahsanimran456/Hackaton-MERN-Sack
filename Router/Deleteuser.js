import mongoose from 'mongoose';
import express from "express";
import { Users } from './Adduser.js';

function Deleteuser(req,res) {
    const userid = req.params.id
    console.log(userid)
    Users.deleteOne({_id : userid},(err,data)=>{
        if (!err){
            if (data.deletedCount !== 0) {
                res.send({
                    message: "User has been deleted successfully",
                })
            } else {
                res.send({
                    message: "No User found with this id:" + userid,
                })
            }
        } else {
            res.status(500).send({
                message: "server error"
            })
        }
    })
}

export default Deleteuser;