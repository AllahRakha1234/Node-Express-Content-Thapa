const express = require("express");
const app = express();

const homePage = (req, res) => {
  res.send("<h1>Hi, I am home page!</h1>");
};

const aboutPage = (req, res) => {
  //   res.send("<h1>Hi, I am about page</h1>");
  // BELOW TWO METHODS ARE SAME BUT JSON HAS MORE ADVANTAGES LIKE IT CONVERT NULL, UNDEFIND TO JSON WHICH ARE NON-OBJECTS
  //   res.send({ message: "Hi, I am about page" });
  res.json({ message: "Hi, I am about page" });
};

module.exports = { homePage, aboutPage };
