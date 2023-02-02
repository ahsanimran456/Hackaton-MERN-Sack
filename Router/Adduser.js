import mongoose from 'mongoose';
import express from "express";
import {
    stringToHash,
    varifyHash,
    validateHash
} from "bcrypt-inzi"
const app = express()
const UsersSchema = mongoose.Schema(
    {
        fullname: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        phone: { type: Number, required: true },
        password: { type: String, required: true },
    },
    { timestamps: true }
);

 const Users = mongoose.model("Users", UsersSchema);

function Adduser(req, res) {
    const body = req.body
    console.log(body)
    // if ((body.fullname) && (body.email) && (body.phone) && (body.password)) {
    //     try {
    //         const adduserDb = await Users.create(body)
    //         res.status(200).send({ message: 'Added user Successfully', data: adduserDb })
    //     }
    //     catch (err) {
    //         console.log(err);
    //         res.send({ message: 'Server Error' })
    //     }
    // } else {
    //     res.send({ Message: "Required parameter in missing" })
    // }
    // return

    let passwordValidation = /^[a-zA-Z0-9]{6,16}$/;
    let namevalid = /^[A-Za-z .]{3,20}$/
    let eamilvalid = /^([\w]*[\w\.]*(?!\.)@gmail.com)/
    let phonevalid = /^[0-9]{11}$/
    if ((namevalid.test(body.fullname)) && (body.email) && (phonevalid.test(body.phone)) && (passwordValidation.test(body.password))) {
        Users.findOne({ email: body.email }, async (err, user) => {
            if (!err) {
                // ........when user exits .....//
                if (user) {
                    console.log("user exist is db ")
                    res.send({ message: "Email is already in use" })
                }
                // ........when user does not exits .....//
                else {
                    // convert password into hash //
                    stringToHash(body.password).then(async (password) => {
                        console.log("hash: ", password);
                        try {
                            const adduserDb = await Users.create({
                                fullname: body.fullname,
                                email: body.email,
                                phone: body.phone,
                                password: password,
                            })
                            res.status(200).send({ message: 'Added user Successfully', data: adduserDb })
                        }
                        catch (err) {
                            console.log(err);
                            res.send({ message:'Server Error' })
                        }
                    })
                }
            }
        })

    } else {
        res.send({ Message: "Required parameter in missing" })
    }
    return
}

export { Adduser,Users};