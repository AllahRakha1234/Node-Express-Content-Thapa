// TO IMPORT AS MODULE, CHANGE TYPE=MODULE IN PACKAGE.JSON FILE
// const chalk = require("chalk"); // REQUIRE HAS BEEN DEPRECATED USE IMPORT
import chalk from "chalk";
import validator from "validator";

console.log(chalk.white.bgGreen.bold.underline("Success!"));
console.log(chalk.white.bgGreen.bold.underline.inverse("Success!"));
console.log(chalk.red.bgYellow.bold("Error!"));
console.log(
  validator.isEmail("abc@gmail.com") ? chalk.green("True") : chalk.red("False")
);
console.log(
  validator.isEmail("abc@gmail.m") ? chalk.green("True") : chalk.red("False")
);
