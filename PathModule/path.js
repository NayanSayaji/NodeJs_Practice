const path = require("path");

// directory name
console.log(path.dirname("D:/Programming/WEB DEV Stuff/MERN Practice/Backend Practice/PathModule/path.js"));

// .extension
console.log(path.extname("D:/Programming/WEB DEV Stuff/MERN Practice/Backend Practice/PathModule/path.js"));

// current filename
console.log(path.basename("D:/Programming/WEB DEV Stuff/MERN Practice/Backend Practice/PathModule/path.js"));


const myPath = path.parse("D:/Programming/WEB DEV Stuff/MERN Practice/Backend Practice/PathModule/path.js");
console.log(myPath);
console.log("root : ",myPath.root);
console.log("dir : ",myPath.dir);
console.log("base : ",myPath.base);
console.log("ext : ",myPath.ext);
console.log("name : ",myPath.name);
