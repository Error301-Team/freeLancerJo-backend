"use strict";
const { userModel, User } = require("../models/User.model");

let get_users = async (req, res) => {
    let users_list = await userModel.find({});
    res.status(201).json(users_list);
};
let create_user = async (req, res) => {
    let { name, rating, img, email, phoneNumber, skills, experience, job_describtion, price, location ,lauguages,Education,madeBy} = req.body;
    let newUser = new userModel({
        name: name,
        rating: rating,
        img: img,
        email: email,
        phoneNumber: phoneNumber,
        skills: skills,
        experience: experience,
        job_describtion: job_describtion,
        price: price,
        location: location,
        lauguages:lauguages,
        Education:Education,
        madeBy:madeBy,
    });
    newUser.save();
    setTimeout(()=>{
        userModel.find({}).then(data=>res.json(data));
    },250)
};
let delete_user = (req, res) => {
    let id = req.params.id;
    userModel.findByIdAndDelete(id, async (error, data) => {
        if (error) {
            res.status(500).send("An Error Occured")
        }
        let users_list = await userModel.find({})
        res.json(users_list);
    })
};
const updated_user = async (req, res) => {
    let userID = req.params.id;
    let updatedData = req.body;
    const user = await userModel.findByIdAndUpdate(userID, updatedData, { new: true, runValidators: true })
    res.status(200).json({
        status: "success",
        data: {
            user
        }
    })
}
module.exports = { get_users, create_user, delete_user,updated_user};
