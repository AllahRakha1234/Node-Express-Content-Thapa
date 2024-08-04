// ALWAYS USE TRY-CATCH BLOCK WHEN USE ASYNC-WAIT AS IN PROMISE WE ARE USING .THEN AND .CATCH
// *** 26) CREATING SERVER & ROUTNG WITH EXPRESS **** (It is a framework for Node.js)(app.get is a method of express which has 2 parameters::: ** app.get("route/path", callback) ** ) (We have app.get, app.post, app.put, app.delete, request methods in express)

// *** 27)  ROUTNG WITH EXPRESS ***
// *** 28)  SENDING HTML AND JSON WITH EXPRESS ***
// *** 29)  SERVING HTML AND CSS WITH EXPRESS *** (express.static used to serve static website)(EXPRESS.STATIC() is a middleware. Middleware is everything between request and response.)
// *** 29)  SERVING WEBSITE WITH EXPRESS *** (express.static used to serve static website)

// *** 34)  ADDING 404 PAGE IN EXPRESS ***
// *** (MONGODB STARTS FROM VIDEO NUMBER 40) (mongoose_50 is the folder for the start of the mongoose video) ***

// const express = require("express");
// const path = require("path");
// const { homePage, aboutPage } = require("./routes");

// const app = express();
// const port = 3000;

// const staticPath = path.join(__dirname, "../public");
// app.use(express.static(staticPath));

// app.get("/", homePage);

// app.get("/about", aboutPage);

// app.get("/about/*", (req, res) => {
//   res
//     .status(404)
//     .send(
//       '<h1 style="color:red; background-color:aqua; display:flex; justify-content: center">404, Page not found</h1>'
//     );
// });

// app.get("*", (req, res) => {
//   res
//     .status(404)
//     .send(
//       '<h1 style="color:red; background-color:aqua; display:flex; justify-content: center">404, Page not found</h1>'
//     );
// });

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });

// *** 80=83)  COOKIE STORING AND GETTING *** (res.cookie to store & req.cookies to get the cookie)
// The res.cookie() method in Express.js is used to set a cookie in the HTTP response. Cookies are small pieces of data that are stored on the client's browser and sent back to the server with each subsequent request to the same server. This is often used to maintain session state, track user activity, or store user preferences.

// EXMAPLE
// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   // Set a cookie named 'user' with a value of 'John Doe'
//   res.cookie("jwt", token, {
//     httpOnly: true,
//     expires: new Date(Date.now() + 60000),
//   });
//   res.send("Cookie has been set");
// });

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

// ** cookie-parser module is used to get the set cookie using REQ.COOKIES() METHOD **

const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
dotenv.config();

app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to homepage");
});

app.get("/savetoken", async (req, res) => {
  const token = await jwt.sign(
    { id: "66855d9955c7e0849c53bf82" },
    process.env.SECRET_KEY
  );
  res.cookie("jwt", token, { expires: new Date(Date.now() + 120000) });
  res.send("Token after saving is: " + token);
});

app.get("/gettoken", (req, res) => {
  const token = req.cookies.jwt;
  res.send("Token after getting is: " + token);
});

app.get("/logout", (req, res) => {
  res.clearCookie("jwt");
  res.send("Logout succesfully.");
});

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});

// AUTHENTICATION FUNCITON SYNTAX
// Middleware to authenticate JWT tokens
// const authenticateToken = (req, res, next) => {
//     const token = req.cookies.jwt;
//     if (!token) return res.sendStatus(401);

//     jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
//       if (err) return res.sendStatus(403);
//       req.user = user;
//       next();
//     });
//   };
