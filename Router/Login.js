import mongoose from 'mongoose';
import express from "express";
import {
    stringToHash,
    varifyHash,
    validateHash
} from "bcrypt-inzi"
import { Appusers } from './Signup.js';
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken';
const app = express()
const SECRET_KEY = "secret"


function Login(req, res) {
    const body = req.body
    console.log(body)
    let passwordValidation = /^[a-zA-Z0-9]{6,16}$/;
    let namevalid = /^[A-Za-z .]{3,20}$/
    let eamilvalid = /^([\w]*[\w\.]*(?!\.)@gmail.com)/
    let phonevalid = /^[0-9]{11}$/
    if ((namevalid.test(body.fullname)) && (body.email) && (phonevalid.test(body.phone)) && (passwordValidation.test(body.password))) {
        Appusers.findOne({ email: body.email }, async (err, user) => {
            if (!err) {
                // ........when user exits .....//
                if (user) {
                    // console.log("user exist is db ")
                    // res.send({ message: "Email is already in use" })
                    varifyHash(body.password, user.password).then(matctPassword => {
                        if (matctPassword) {
                            console.log("matched", matctPassword);

                            let Token = jwt.sign({
                                id: user._id,
                                name: user.name,
                                email: user.email,
                            },SECRET_KEY);
                            console.log("token",Token)

                            res.cookie("Token",Token,{
                                maxAge:86_400_000,
                                httpOnly :true
                            })
                            res.status(200).send({
                                    message: "login successful",
                                    Token
                                });
                        } else {
                            res.send({ message: "Please write correct password" })
                        }
                    }).catch(e => {
                        console.log("error: ", e)
                    })
                }
                // ........when user Please write coorect email .....//
                else {
                    res.send({ message: "Please write correct email" })
                   
                }
            }
        })

    } else {
        res.send({ Message: "Required parameter is missing" })
    }
    return
}

export { Login };