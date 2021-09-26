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
const PORT = process.env.PORT;
const businesseController = require("./controllers/Yelp");
const freeLancerController=require("./controllers/Freelancer");
const PixabayController=require("./controllers/Pixabay");
const {seedUser} =require("./models/User.model");
const {get_users}=require("./controllers/User");
const {create_user}=require("./controllers/User");

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
app.get('/yelp', businesseController);
app.get('/freeLancer', freeLancerController);
app.get('/pixabay', PixabayController);
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})