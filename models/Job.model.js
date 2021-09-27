"use strict";
const mongoose = require("mongoose");
const Job = new mongoose.Schema({
    name: String,
    description: String,
    email: String,
    category: String,
    location: String,
    applied:Array,
    skills:Array,
    tools:Array,
    qualification:Array,
    salary:String,
    phononumber:String,
    status:Boolean,
    madeBy:String,
});
const jobModel = mongoose.model('Jobs', Job);
module.exports = { Job, jobModel };