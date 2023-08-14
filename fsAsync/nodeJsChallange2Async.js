// Challenge Time

//  1: Create a folder named it Thapa
//  2: Create a file in it named bio.txt and data into it.
//  3: Add more data into the file at the end of the existing data.
//  4: Read the data without getting the buffer data at first.
//  file encoding
//  5: Rename the file name to mybio.txt
//  6: now delete both the file and the folder

const fs = require("fs");

//  1: Create a folder named it new_Folder
fs.mkdir("new_Folder", (err) => {
  console.log("New Folder Created");
});

//  2: Create a file in it named bio.txt and data into it.
fs.writeFile(
  "new_Folder/bio.txt",
  "New file created and data added. ",
  (err) => {
    console.log("File Created....");
  }
);

//  3: Add more data into the file at the end of the existing data.
fs.appendFile(
  "new_Folder/bio.txt",
  "text appended to newly created file..",
  (err) => {
    console.log("data appended");
  }
);

//  4: Read the data without getting the buffer data at first.
//  file encoding
fs.readFile("new_Folder/bio.txt", "utf-8", (err, data) => {
  console.log("Reading data from new_Folder.bio.txt.... ", data);
});

//  5: Rename the file name to mybio.txt
fs.rename("new_Folder/bio.txt", "new_Folder/mybio.txt", (err) => {
  console.log("file renamed");
});

//  6: now delete both the file and the folder
// remove file
fs.unlink("new_Folder/mybio.txt", () => {
  console.log("mybio.txt file deleted");
});
// remove folder / directory
fs.rmdir("./new_Folder", () => {
  console.log("new_Folder deleted");
});
