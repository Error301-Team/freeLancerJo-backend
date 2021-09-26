"use strict";
const { userModel, User } = require("../models/User.model");

let get_users = async (req, res) => {
    let users_list = await userModel.find({});
    res.status(201).json(users_list);
}

module.exports = {get_users};