const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

// console.log(process.env.MONOGO_URI);
// Connecting to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Server is connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
