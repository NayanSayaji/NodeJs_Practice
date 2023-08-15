const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
    // way 1 of accessing data
//     fs.readFile("input.txt", 'utf-8', (err, data) => {
//         if (err) return console.error(err);
//         res.end(data.toString());
//     });

// 2nd way
// Reading from a stream
// create a readable stream
// Handle stream events --> data, end, and error

    // rStream === readable stream
    // const rStream = fs.createReadStream("input.txt");

    // // firing the data event on rStream
    // rStream.on('data', (chunkData) => {
    //     res.write(chunkData);
    // })
    // rStream.on('end', () => {
    //     res.end();
    // })


    // way 3 using pipe method
    const rStream = fs.createReadStream("input.txt");
    // pipe method takes the destination where we need to
    // write the data on, in this case destination is our res
    // bcoz we are sending this data as response to our request
    rStream.pipe(res);
    // res.end();

});



server.listen(8080, "localhost", () => {
    console.log(`server is running on http://localhost:8080`)
})

