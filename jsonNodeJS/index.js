const fs = require("fs")
const { fileURLToPath } = require("url")

const bioData = {
    name : "nayan",
    age : 21,
    email : "nayansayaji277@gmail.com",
}

// converting object into JSON format we use stringify method of JSON
// const jsonData = JSON.stringify(bioData);
// console.log(jsonData)

// converting JSON into object format we use parse method of JSON
// const objData = JSON.parse(jsonData);
// console.log(objData)


// Challange : 
// 1] Convert to JSON
// 2] Add into different file
// 3] readFile
// 4] again convert back to JS obj original
// 5] console.log

const jsonData = JSON.stringify(bioData);

fs.writeFile("json1.json",jsonData, (err)=>{
    console.log("jsonData Added into different file");
})

fs.readFile("json1.json","utf-8",(err, data)=>{
    console.log(data)

    const originalData = JSON.parse(data);
    console.log(originalData);
})