const name = "nayan";
console.log(name);
// we like the above given lines and by default while execution nodejs wraps these things into module wrapper function

// module wrapper function
( function(exports, require,module,__filename,__dirname){
    const name = "nayan";
    console.log(name);
})
// we cant write code like this 
// if we do this will not work

// exports, require,module,__filename,__dirname
// thus this parameters are wrapped inside the wrapper function we can use these functions/methods
const path = require("path");

console.log(__filename)
console.log(__dirname)


// The module wrapper#
// Before a module's code is executed, Node.js will wrap it with a function wrapper that looks like the following:

// (function(exports, require, module, __filename, __dirname) {
// // Module code actually lives in here
// }); COPY
// By doing this, Node.js achieves a few things:

// It keeps top-level variables (defined with var, const, or let) scoped to the module rather than the global object.
// It helps to provide some global-looking variables that are actually specific to the module, such as:
// The module and exports objects that the implementor can use to export values from the module.
// The convenience variables __filename and __dirname, containing the module's absolute filename and directory path.