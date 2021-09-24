"use strict";
const axios = require("axios");
const Employees = require("../models/Freelancer.model");
const freeLancerController = async (req, res) => {
    let url = `https://www.freelancer.com/api/projects/0.1/jobs/search`
    let axiosResponse = await axios.get(url);
    let freeLancer = axiosResponse.data.result;
    let result = freeLancer.map(Element => {
        return new Employees(
            Element.id,
            Element.name,
            Element.category,
            Element.active_project_count,
            Element.seo_url,
            Element.seo_info,
            Element.local,
        )
    })
    res.status(200).json(result);
}
module.exports = freeLancerController;