const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/comics", async (req, res) => {
  try {
    // console.log(req.query);
    const { page, title } = req.query;
    //condition pagination if/else
    const limit = 100;
    let pageToSend = 1;
    if (page) {
      pageToSend = page;
    }
    const skip = (pageToSend - 1) * limit;

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?limit=${limit}&skip=${skip}&apiKey=${process.env.API_KEY}&title=${title}`
    );
    // console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
