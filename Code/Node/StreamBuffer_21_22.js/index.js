// *** 21) STREAM BUFFER IN NODEJS *** (It is used to read the file in chunks) (It has 4 types of streams: Readable, Writable, Duplex, Transform) (when reading a file, it returns multiple event while reading stream like data, end, error, finish etc.)

// const http = require

// Other way to create a serv("http");
// const fs = require("fs");
// const path = require("path");er
// const server = http.createServer();
// server.on("request", (req, res) => {
//   // READING FILE ASYNCHRONOUSLY
//   //   fs.readFile(path.join(__dirname, "/read.txt"), "utf-8", (err, data) => {
//   //     if (err) {
//   //       res.write("File not found");
//   //     } else {
//   //       res.write(data);
//   //     }
//   //     res.end();
//   //   });
//   // READING FILE IN STREAM MANNER
//   const rstream = fs.createReadStream(path.join(__dirname, "/read.txt"));
//   rstream.on("data", (chunkdata) => {
//     res.end(chunkdata);
//   });
//   rstream.on("end", () => {
//     console.log("Data ended");
//     res.end("Data ended!");
//   });
//   rstream.on("error", () => {
//     console.log("Error occured while reading");
//     res.end("<h1>Error occured while reading</h1>");
//   });
// });

// server.listen(3000, () => {
//   console.log(`Server is runnin on http://localhost:3000/`);
// });

// *** 22) PIPE IN NODEJS *** (It is also to do the same work as we did in the above code) (It reads and write the data at the same speed) ()

// const http = require("http");
// const fs = require("fs");
// const path = require("path");

// const server = http.createServer();
// server.on("request", (req, res) => {
//   const rstream = fs.createReadStream(path.join(__dirname, "/read.txt"));
//   rstream.pipe(res);
// });

// server.listen(3000, () => {
//   console.log(`Server is runnin on http://localhost:3000/`);
// });
