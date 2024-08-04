// *** NODEMAILER IN NODEJS *** (It is used to send the email) (It uses ethereal for SMTP protocol)

const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const PORT = 3000 || process.env.PORT;
const sendMail = require("./sendMail");

app.get("/", (req, res) => {
  res.send("I am homepage.");
});

app.get("/sendmail", sendMail);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
