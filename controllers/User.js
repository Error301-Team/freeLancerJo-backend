"use strict";
const { userModel, User } = require("../models/User.model");

let get_users = async (req, res) => {
    let users_list = await userModel.find({});
    res.status(201).json(users_list);
}

let create_user = async (req, res) => {
    let { name, rating, img, email, phoneNumber, skills, experience, job_describtion, price, location } = req.body;
    let newUser = new userModel({
        name : name,
        rating : rating,
        img : img,
        email : email,
        phoneNumber : phoneNumber,
        skills : skills,
        experience : experience,
        job_describtion : job_describtion,
        price : price,
        location : location
    });
    newUser.save();
    let users_list = await userModel.find({});
    res.status(201).json(users_list);
}

module.exports = { get_users,create_user };
