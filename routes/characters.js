const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/characters", async (req, res) => {
  try {
    const { page, name } = req.query;
    //condition pagination if/else
    const limit = 100;
    let pageToSend = 1;
    if (page) {
      pageToSend = page;
    }
    const skip = (pageToSend - 1) * limit;

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?limit=${limit}&skip=${skip}&apiKey=${process.env.API_KEY}&name=${name}`
    );

    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
