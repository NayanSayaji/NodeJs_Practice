// importing module
// const add = require("./operator")
// console.log(add(5,5));

// importing complete package
// const oper = require("./operator")
// accessing add method of oper module
// console.log(oper.add(5,5));
// console.log(oper.sub(5,5));

// using object destructuring
// names should be same as exporting
// sequence while exporting can be change but names should be same
const { add, sub, name, mul } = require("./operator");

console.log(add(5, 5));
console.log(sub(5, 5));
console.log(mul(5, 5));
console.log(name);
