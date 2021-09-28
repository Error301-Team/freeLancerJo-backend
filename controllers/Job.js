"use strict";
const { jobModel, Job } = require("../models/Job.model");

let get_jobs = async (req, res) => {
    let jobs_list = await jobModel.find({});
    res.status(201).json(jobs_list);
};
let create_job = async (req, res) => {
    let { name, description, email, category, location, applied, skills, tools, qualification, salary, phononumber, status ,madeBy} = req.body;
    let newJob = new jobModel({
        name: name,
        description: description,
        email: email,
        category: category,
        location: location,
        applied: applied,
        skills: skills,
        tools: tools,
        qualification: qualification,
        salary: salary,
        phononumber: phononumber,
        status: status,
        madeBy:madeBy
    });
    newJob.save();
    setTimeout(() => {
        jobModel.find({}).then(data => res.json(data));
    }, 250);
};
let delete_job = (req, res) => {
    let id = req.params.id;
    jobModel.findByIdAndDelete(id, async (error, data) => {
        if (error) {
            res.status(500).send("An Error Occured")
        }
        let jobs_list = await jobModel.find({})
        res.json(jobs_list);
    })
};
const updated_job = async (req, res) => {
    let jobID = req.params.id;
    let updatedData = req.body;
    const job = await jobModel.findByIdAndUpdate(jobID, updatedData, { new: true, runValidators: true })
    let jobs_list = await jobModel.find({});
    res.status(201).json(jobs_list);
}
module.exports = { get_jobs, create_job, delete_job, updated_job };