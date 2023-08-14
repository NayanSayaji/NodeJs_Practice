import chalk from "chalk";
import validator from "validator";

// console.log(chalk.blue.italic("Hello World"));

// console.log(chalk.green.underline.inverse("seccess"));

// console.log(chalk.red.underline.inverse("false"));
const res = validator.isEmail("nayan@gmail.com")
// const res = validator.isEmail("nayan@gmbai.l.co,m")
console.log(res ? chalk.green.inverse(res):chalk.red.inverse(res));
