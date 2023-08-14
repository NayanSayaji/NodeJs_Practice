const fs = require("fs");

fs.writeFile('read.txt',"Hey there ", (err)=>{
    console.log("file is created");
    console.log(err)
})

// we pass them a function as an argument – a callback –
// that gets called when that task completes.
// The callback has an argument that tells you whether
// the operation completed successfully.
// Now we need to say what to do when fs.writeFile
// has completed (even if it’s nothing), and start
//  checking for errors.

fs.appendFile("read.txt", "hope you are doing great", (err) => {
  console.log("task completed");
});

fs.readFile("read.txt", "UTF-8", (err, data) => {
  console.log(data);
});
console.log("nodejs is awesome");