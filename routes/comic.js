const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/comic/:comicId", async (req, res) => {
  try {
    // const { comicId } = req.params;
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comic/${req.params.comicId}?apiKey=${process.env.API_KEY}`
    );
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
