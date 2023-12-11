const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Project", productSchema);
