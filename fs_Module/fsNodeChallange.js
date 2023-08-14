// Challenge Time

//  1: Create a folder named it newFolder
//  2: Create a file in it named bio.txt and data into it.
//  3: Add more data into the file at the end of the existing data.
//  4: Read the data without getting the buffer data at first.
//  file encoding
//  5: Rename the file name to mybio.txt
//  6: now delete both the file and the folder

const fs = require("fs");

//  1: Create a folder named it newFolder
// fs.mkdirSync("newFolder");
                         
//  2: Create a file in it named bio.txt and data into it.
// fs.writeFileSync("newFolder/bio.txt", "Hi my name is nayan sayaji. ");

//  3: Add more data into the file at the end of the existing data.
// fs.appendFileSync("newFolder/bio.txt"," I'm frontend developer");


//  4: Read the data without getting the buffer data at first.
// file encoding
// const data = fs.readFileSync("newFolder/bio.txt","utf8");
// console.log(data);

//  5: Rename the file name to mybio.txt
// fs.renameSync("newFolder/bio.txt","newFolder/myBio.txt");


//  6: now delete both the file and the folder
// delete file myBio.txt
// fs.unlinkSync("newFolder/myBio.txt");

// delete folder
fs.rmdirSync("newFolder");