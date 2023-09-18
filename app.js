const express = require("express");
const app = express();
const mongoose = require("mongoose");
const recipeRouter = require("./routes/recipeRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/recipe", recipeRouter);

mongoose
  .connect("mongodb+srv://ksathuljith:12345@cluster0.z74d9rv.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("connected to database"))
  .catch((error) => console.log("Error" + error));

const PORT = 6666;
app.listen(PORT, () => console.log("listening to " + PORT));
