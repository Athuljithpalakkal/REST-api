const express = require("express");
const recipeRouter = express.Router();
const Recipe = require("../models/recipee");

// add recipe

recipeRouter.post("/addRecipee", (req, res) => {
  const data = new Recipe({
    name: req.body.name,
    time: req.body.time,
    ingredients: req.body.ingredients,
    instruction: req.body.instruction,
  });
  data
    .save()
    .then((data) => {
      console.log("data saved");
      res
        .status(201)
        .json({ Message: "recipe added successfully", data: data });
    })
    .catch((err) => console.log(err));
});

// display all recipee

recipeRouter.get("/allRecipee", (req, res) => {
  Recipe.find()
    .then((data) => {
      res.status(200).json({ Message: "All recipies", data: data });
    })
    .catch((err) => console.log(err));
});

// single Recipe

recipeRouter.get("/oneRecipee/:id", (req, res) => {
  Recipe.findOne({
    _id: req.params.id,
  })
    .then((data) => {
      res.status(200).json({ Message: "recipe details", Recipe: data });
    })
    .catch((err) => console.log(err));
});

// delete recipe

recipeRouter.get("/dltRecipee/:id", (req, res) => {
  Recipe.deleteOne({
    _id: req.params.id,
  })
    .then(() => {
      console.log("recipe deleted");
      res.status(200).json({ Message: "recipe deleted successfully" });
    })
    .catch((err) => console.log(err));
});

// update recipee

recipeRouter.post("/updateRecipee/:id", (req, res) => {
  Recipe.findOne({
    _id: req.params.id,
  })
    .then((data) => {
      data.name = req.body.name;
      data.time = req.body.time;
      data.ingredients = req.body.ingredients;
      data.instruction = req.body.instruction;
      data
        .save()
        .then(() => {
          console.log("updation successfull");
          res
            .status(201)
            .json({ Message: "Updated recipe successfully", recipe: data });
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
});

module.exports = recipeRouter;
