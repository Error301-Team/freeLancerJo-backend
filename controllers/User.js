"use strict";
const { userModel, User } = require("../models/User.model");

let get_users = async (req, res) => {
    let users_list = await userModel.find({});
    res.status(201).json(users_list);
};
let create_user = async (req, res) => {
    let { name, rating, img, email, phoneNumber, skills, experience, job_describtion, price, location ,lauguages,Education} = req.body;
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
        Education:Education
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
const updated_user=async (req,res)=>{
    let userID=req.params.id;
    let updatedData=req.body;
    userModel.findOne({_id:userID}).then(update=>{
        update.name=updatedData.name;
        update.rating=updatedData.rating;
        update.img=updatedData.img;
        update.email=updatedData.email;
        update.phoneNumber = updatedData.phoneNumber;
        update.skills = updatedData.skills;
        update.experience = updatedData.experience;
        update.job_describtion = updatedData.job_describtion;
        update.price = updatedData.price;
        update.location = updatedData.location;
        update.lauguages = updatedData.lauguages;
        update.Education = updatedData.Education;
        update.save();
    });
       setTimeout(()=>{
        userModel.find({}).then(data=>res.json(data));
    },250)
};
module.exports = { get_users, create_user, delete_user,updated_user};
