const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "ardella.franecki@ethereal.email",
      pass: "g2WMeeYxVBtPMYJDME",
    },
  });
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Maddison Foo Koch 👻" <arz@gmail.email>', // sender address
    to: "rakhazaidi786@gmail.com", // list of receivers
    subject: "Gree ✔", // Subject line
    text: "Hi", // plain text body
    html: "<b>Hi?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  res.json(info);
};

module.exports = sendMail;
