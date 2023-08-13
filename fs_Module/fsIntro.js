const fs = require("fs");

// this are the synchronous functions which will execute one after another
// fs.writeFileSync
// fs.appendFileSync

// creating a new file 
fs.writeFileSync('read.txt',"Let's learn about file System module");

// this will override the previos data of this file
fs.writeFileSync('read.txt',"Let's learn about file System module and get in depth. ");

fs.appendFileSync("read.txt", "now we are appending this new data.....")


const buf_data = fs.readFileSync("read.txt");
// console.log(buf_data);

// Node.js includes an additional data type called buffer
// (not available in browser's javascript)
// Buffer is mainly used to store binary data,
// while reading from a file or receiving packets over the network


{/* <Buffer 4c 65 74 27 73 20 6c 65 61 72 6e 20 61 62 6f 75 74 20 66 69 6c 65 20 53 79 73 74 65 6d 20 6d 6f 64 75 6c 65 20 61 6e 64 20 67 65 74 20 69 6e 20 
64 65 ... 44 more bytes> */}


// so how to tackle this 
// convert that data into string format 
org_data = buf_data.toString();

console.log(org_data);

// fs.renameSync('oldName', 'newName')
fs.renameSync('read.txt', 'readWrite.txt')



