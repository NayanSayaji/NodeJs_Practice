const fs = require("fs");

// synchronous way
const data = fs.readFileSync("read.txt","utf-8");
console.log(data);
console.log("after the data");
// output:
// Hey there plz like and share and subs my chanel
// after the data..


// asynchronous way
fs.readFile('read.txt', 'utf-8', (err,data)=>{
    console.log(data);
})
console.log("after the data..");
// output:
// after the data..
// Hey there plz like and share and subs my chanel
