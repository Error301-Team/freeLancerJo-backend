"use strict";
const axios = require("axios");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");
require("dotenv").config();
app.use(express.json());
app.use(cors());
const formidable =require("formidable");
const PORT = process.env.PORT;
const businesseController = require("./controllers/Yelp");
const freeLancerController=require("./controllers/Freelancer");
const PixabayController=require("./controllers/Pixabay");
const {seedUser} =require("./models/User.model");
const {get_users,create_user,delete_user,updated_user}=require("./controllers/User");
const {get_jobs, create_job, delete_job,updated_job}=require("./controllers/Job");
mongoose.connect(`${process.env.MONGO_SERVER}`,{useNewUrlParser: true, useUnifiedTopology: true});
app.get('/', (req, res) => {
    res.status(200).json({ "message": "I'm working" });
})
app.get('/seed-data',(req,res)=>{
    seedUser();
        res.json({
            "message":"Users Created succefully"
        })
    });
app.get('/getUsers',get_users);
app.post('/createUser',create_user);
app.delete('/deleteUser/:id',delete_user);
app.patch("/updateUser/:id",updated_user);
app.get('/getJobs',get_jobs);
app.post('/createJob',create_job);
app.delete('/deleteJob/:id',delete_job);
app.patch("/updateJob/:id",updated_job);
app.get('/yelp', businesseController);
app.get('/freeLancer', freeLancerController);
app.get('/pixabay', PixabayController);
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})

