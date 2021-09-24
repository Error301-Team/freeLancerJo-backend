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
const businesseController=require("./controllers/Yelp")

app.get('/', (req, res) => {
    res.status(200).json({ "message": "I'm working" })
})

app.get('/yelp',businesseController)


app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})