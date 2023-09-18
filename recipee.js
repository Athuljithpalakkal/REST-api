const mongoose = require("mongoose");
const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  time: {
    type: String,
    require: true,
  },
  ingredients: {
    type: String,
    require: true,
  },
  instruction: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Recipe", recipeSchema);
