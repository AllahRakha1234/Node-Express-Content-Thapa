const express = require("express");
const router = express.Router();

router.get("/user/:id", (req, res) => {
  const id = req.params.id;
  res.status(200).send("Id: " + id);
});

router.get("/", (req, res) => {
  const id = req.params.id;
  res.status(200).send("Welcom to home page");
});

router.get("/about", (req, res) => {
  res.status(200).send("Welcom to about page");
});

router.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

module.exports = router;
