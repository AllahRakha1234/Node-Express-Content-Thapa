// **************((((((( THOSE VIDEOS WHICH ARE NOT HERE ARE IN SEPARATE DIR )))))))**************

// *** 4) REPL IN NodeJS *** (REPL feature of Node is useful in experimenting NodeJs code and debug JS code) (REPL means read, evaluate, print, loop) (REPL in Node is same cmd in window) (This command to create a new file: type nul > index1.js) (*To start the REPL type node in terminal*)(Below code is run in the REPL) (Press two time TAB to get all the COMMANDS)
// JS-Expression
// a = 4
// b = 4
// a+b

// JS variable
// var b = "hi";
// b;

// Multiline Code :: (When "do" is written and enter is pressed it automatically understands)
// > var x = 0
// > do
// ... {console.log(x); x++}
// ... while(x<5)

// Use of (_) :: (It refers to last result)
// x = 5
// x + 5
// _ + 5
// _ + 5

// Editor mode :: (Type .editor in the REPL to start the editor mode)
// > .editor
// // Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
// let y = 5
// let z = 0

// *** 5) CORE MODULES IN NodeJS :: FS Module *** (As we have in JS modules like to animate, D3.js, chart.js, In ths same way we have a lot of core modules in nodejs which are BUILT IN like path, http, fs, os etc.)

// const fs = require("fs");
// fs.writeFileSync("read.txt", "Welcome to NodeJS");
// fs.writeFileSync("read.txt", "Welcome to NodeJS again"); // It will overwrite the file content
// fs.appendFileSync("read.txt", " This is the appended text"); // It'll append the text in the file
// fs.renameSync("read.txt", "readwrite.txt"); // It will rename the file
// const buf_data = fs.readFileSync("readwrite.txt"); // To avoid this use "utf-8" in readFileSync
// console.log(buf_data); // It'll show the buffer data, (**buffer is another type in node js**)
// console.log(buf_data.toString()); // It'll show the data in string format
// setTimeout(() => {
//   fs.unlinkSync("readwrite.txt"); // It will delete the file
// }, 3000);

// *** 6) CHALLENGE- 1 ***
// readFileSync("folder1/read.txt") // If the file is in the folder1 use this path
// readFileSync("folder1/read.txt", "uft-8") // To avoid buffer data use this. It will convert the buffer data into string

// *** 7) READFILE (ASYNCHRONOUS WAY) ***

// const fs = require("fs");
// fs.writeFile("readfile.txt", "This is asynchrous way", (err) => {
//   console.log("File is created");
//   console.log("Content is written");
//   console.log("Error is: ", err);
// });

// fs.appendFile("readFile.txt", "This is the appended text", (err) => {
//   console.log(err);
// });

// fs.readFile("readFile.txt", "utf-8", (err, data) => {
//   // Here output stored in the data parameter
//   console.log(data);
//   console.log(err);
// });

// *** 8) READFILE ASYNCHRONOUS VS SYNCHRONOUS  ***
// (It is explained by console.log("After the data") in the code)

// *** 9) CHALLENGE-2  ***

// const fs = require("fs");
// fs.mkdirSync("folder1"); // To create a folder
// fs.rmdirSync("folder1"); // To delete a folder

// *** 10) OS MODULE IN NODE.JS  *** (It is used to get the information about the operating system)

// const os = require("os");
// const user = os.userInfo();
// console.log(user);
// console.log(`The system uptime is ${os.uptime()} seconds`); // Uptime = time since last boot
// console.log(os.arch());
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.type());
// const freeMemory = os.freemem();
// console.log(`The free memory is ${freeMemory} bytes`);
// console.log(freeMemory / 1024 / 1024 / 1024); // To convert bytes into GB
// const totalMemory = os.totalmem();
// console.log(`The total memory is ${totalMemory / 1024 / 1024 / 1024} bytes`);
// console.log(`Temp folder location is : ${os.tmpdir()}`);

// *** 11) PATH MODULE IN NODE.JS  *** (It is used to get the information about the path)

// const path = require("path");
// console.log(path);
// console.log(
//   path.dirname(
//     "F:/Courses/NodeJsCourse/New_Course_ThapaTechnical/Code/index.js"
//   )
// ); // It'll give the directory name
// console.log(
//   path.extname(
//     "F:/Courses/NodeJsCourse/New_Course_ThapaTechnical/Code/index.js"
//   )
// );
// console.log(
//   path.basename(
//     "F:/Courses/NodeJsCourse/New_Course_ThapaTechnical/Code/index.js"
//   )
// );
// const mypath = path.parse(
//   "F:/Courses/NodeJsCourse/New_Course_ThapaTechnical/Code/index.js"
// );
// console.log(mypath); // It'll give the object of the path (root, dir, base, ext, name)
// console.log(mypath.name); // It'll give the name of the path
// console.log(mypath.root); // It'll give the root of the path

// *** 14) GLOBALLY INSTALL MODULE IN NODE.JS  *** (IT IS IN SEPARATE FOLDER)
// nodemon -v
// console.log(3 + 6);

// *** 15) MODULE WRAPPER FUNCTION IN NODE.JS  *** (Question here is that how we use the workd module although we have not imported it ==> Just because of the module wrapper function)(EACH TIME WE RUN THE CODE, IT AUTOMATICALLY WRAPS INSIDE A WRAPPER FUNCTION WHICH IS LIKE A IIFE) (** REMEMBER ONE THING THAT EVERYTHING INSIDE THE IIFE IS PRIVATE AND NOT ACCESSIBLE OUTSIDE** )

// const fs = require("fs");
// (function (exports, require, module, __filename, __dirname) {
//   const fs = require("fs");
//   var a = 10;
//   console.log("I am a wrapper function.");
// })();
// console.log(__dirname); // It'll give the directory name
// console.log(__filename); // It'll give the file name
// console.log(a); // It'll give the error although a is defined in the wrapper function
// console.log(fs.readFileSync("readfile.txt", "utf-8")); // It'll read the file content
// console.log(fs.readFileSync("readfile.txt", "utf-8")); // Gives error as fs inside the wrapper-func

// *** 15) JSON IN NODE.JS  *** (It is used to store the data in the form of key-value pair) (It has two method: JSON.stringify() and JSON.parse())

// *** 20) EVENT MODULE IN NODE.JS  *** (Event is buildin in node.js. It is a class in nodejs) (It has two parts: emit() and on()) (emit() is used to emit the event and on() is used to listen the event) (For simplicity remember emit() is function defining and on() is function calling) (We can )
// const EventEmitter = require("events");
// const event = new EventEmitter(); // Creating an instance of EventEmitter Class

// // Event listener should be defined before emitting the event
// event.on("sayGoodbye", () => {
//   console.log("Goodbye!");
// });

// event.on("sayGoodbye", () => {
//   console.log("Hi");
// });

// event.on("specialGoodbye", (name, sc, msg) => {
//   console.log(`Goodbye ${name}`);
//   console.log(`Status Code: ${sc} and Message: ${msg}`);
// });

// event.emit("sayGoodbye"); // It'll not show anything as we have not listened the event
// event.emit("specialGoodbye", "Ali", 200, "ok");

// *** 24 & 25) PROJECTS IN NODE.JS  ***
