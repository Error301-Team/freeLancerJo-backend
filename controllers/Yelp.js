"use strict";
const axios = require("axios");
const businesse = require("../models/Yelp.model");
const businesseController = async (req, res) => {
    let location = req.query.location;
    let url = `https://api.yelp.com/v3/businesses/search?location=${location}`
      
    let axiosResponse = await axios.get(url ,{ headers:  {"Authorization" : `Bearer ${process.env.YELP_API_Key}`} });
    let businesseData = axiosResponse.data.businesses;
    let result=businesseData.map(Element=>{
        return new businesse(
            Element.id,
            Element.alias,
            Element.name,
            Element.image_url,
            Element.is_closed,
            Element.url,
            Element.review_count,
            Element.categories,
            Element.rating,
            Element.coordinates,
            Element.transactions,
            Element.location,
            Element.phone,
            Element.display_phone,
        )
    })
    res.status(200).json(result);
}
module.exports = businesseController;