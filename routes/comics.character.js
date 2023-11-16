const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/comics/:character", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${req.params.character}?apiKey=${process.env.API_KEY}`
    );
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
