const mongoose = require("mongoose");
const { stringify } = require("querystring");

const Comics = mongoose.model("Comics", {
  title: String,
  author: String,
});

module.exports = Comics;
