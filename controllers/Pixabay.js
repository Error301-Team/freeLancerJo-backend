"use strict";
const axios = require("axios");
const Pixabay = require("../models/Pixabay.model");
const PixabayController = async (req, res) => {
    let q = req.query.q;
    let url = `https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&q=${q}`
    let axiosResponse = await axios.get(url);
    let pixabay = axiosResponse.data.hits;
    let result = pixabay.map(Element => {
        return new Pixabay(
            Element.id,
            Element.pageURL,
            Element.type,
            Element.tags,
            Element.previewURL,
            Element.previewWidth,
            Element.previewHeight,
            Element.webformatURL,
            Element.largeImageURL,
            Element.views,
            Element.downloads,
            Element.collections,
            Element.likes,
            Element.comments,
            Element.user_id,
            Element.user,
            Element.userImageURL,
            Element.imageURL,
        )
    })
    res.status(200).json(result);
}
module.exports = PixabayController;