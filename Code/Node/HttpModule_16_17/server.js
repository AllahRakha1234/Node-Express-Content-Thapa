// *** 16 & 17) HTTP MODULE *** (res.end is used to send the response to the client and res.write is used to write the response) (** RES.END() signals to the server that all of the response headers and body have been sent. This method must be called on each response. **)
// const http = require("http");
// const port = process.env.PORT || 3000;

// const server = http.createServer((req, res) => {
//   //   console.log(req);
//   console.log("running");
//   console.log(req.url);
//   if (req.url === "/") {
//     // res.end("Welcome to the home page");
//     // OR CAN USE BELOW TWO LINES TO DO ABOVE THING (BUt RESPONSE IS ONLY SEND BY res.end/send() METHOD)
//     res.write("Welcome to the home page");
//     res.end();
//   } else if (req.url === "/about") {
//     res.end("Welcome to the about page");
//   } else {
//     res.writeHead(404, {
//       "Content-type": "text/html",
//     });
//     res.end("<h2>404 Page not found</h2>");
//   }
// });

// server.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

// OR
// server.listen(port, "127.0.0.1", () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
