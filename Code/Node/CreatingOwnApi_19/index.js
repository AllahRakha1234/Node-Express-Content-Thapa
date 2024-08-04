// *** Creating Own API *** (API = Application Programming Interface) (API is a set of rules that allows one software application to communicate with another) (API is a software intermediary that allows two applications to talk to each other) (Api acts as a service between two softwares who want to communicate with each other)

const http = require("http");
const fs = require("fs");
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome to the home page");
    res.end();
  } else if (req.url === "/about") {
    res.end("Welcome to the about page");
  } else if (req.url === "/userapi") {
    // console.log(`${__dirname}`);
    // const path = `${__dirname}/data.json`; // OR USE BELOW ONE
    const path = "data.json"; // IT REQUIRES TO BE IN THE WORKING DIRECTORY
    fs.readFile(path, "utf-8", (err, data) => {
      const parsedData = JSON.parse(data);
      console.log("Error: ", err);
      console.log(parsedData[2]);
      res.writeHead(200, {
        "Content-type": "application/json",
      });
      res.end(data);
    });
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end("<h2>404 Page not found</h2>");
  }
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
