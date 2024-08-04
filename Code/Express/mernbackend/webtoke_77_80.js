// *** 77) JWT TOKEN ***
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

// const secret_key = "abcdefghijklmnopqrstuvwxyz1234567890"; // NOW USE .ENV

const generateToken = async (id) => {
  const token = await jwt.sign({ id: id }, process.env.SECRET_KEY); // 2nd argis the secret key
  console.log(token);
};

const verifyToken = async (token) => {
  const result = await jwt.verify(token, process.env.SECRET_KEY);
  console.log(result);
};

generateToken("66855d9955c7e0849c53bf82");
verifyToken(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ODU1ZDk5NTVjN2UwODQ5YzUzYmY4MiIsImlhdCI6MTcyMDAzOTA4Nn0.ziC9Rqgln6eiuxthc6Al9i632OYULQot4yefgk-cr5Q"
);
