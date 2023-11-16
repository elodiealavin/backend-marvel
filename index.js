require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
// const axios = require("axios");
const comicsRoutes = require("./routes/comics");
const comicsCharacterRoutes = require("./routes/comics.character");
const comicRoutes = require("./routes/comic");
const charactersRoutes = require("./routes/characters");
const characterRoutes = require("./routes/characterId");

app.use(comicsRoutes);
app.use(comicsCharacterRoutes);
app.use(comicRoutes);
app.use(charactersRoutes);
app.use(characterRoutes);

app.get("/", (req, res) => {
  console.log("Welcome");
  res.json({ message: "Welcome 👩🏻‍💻" });
});

app.all("*", (req, res) => {
  res.json({ message: "This page doesn't exist" });
});

app.listen(process.env.PORT, () => {
  console.log("Server starded");
});
