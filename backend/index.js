const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

// console.log("1", process.env);
console.log("1", process.env.mongoPassword);

// mongoose
//   .connect(
//     `mongodb+srv://admin:${process.argv.mongoPassword}@cluster0.xha96.mongodb.net/shop?retryWrites=true&w=majority`
//   )
//   .then(() => console.log("DB connection success"))
//   .catch((err) => console.log(err));

app.listen(5000, () => {
  console.log("Backend server is running");
});
