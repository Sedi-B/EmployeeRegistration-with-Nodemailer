const express = require("express");
const cors = require("cors");
const exphbs = require("express-handlebars");
const nodemailer = require("nodemailer");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ exteded: false }));
app.use(bodyParser.json());

//This post  sends link to the employee-registration...
app.post("/adding", function (req, res) {
  const { email } = req.body;
  send(email);
  res.send("Hello from backend");
});

//creating a function that sends emaoil
const config = {
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: true,
  auth: {
    user: "phoshokorr@gmail.com",
    pass: "pbgq iubh wmzr exky",
  },
};

function send(email) {
  const transporter = nodemailer.createTransport(config);
  transporter.sendMail(
    {
      from: "phoshokorr@gmail.com",
      to: email,
      subject: "WELCOME mail",
      text: "Welcome to our Employee portal",
    },
    (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log("email sent");
        return info.response;
      }
    }
  );
}

app.listen(PORT, () => console.log("Sever has started..."));
