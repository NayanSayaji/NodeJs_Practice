const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  const data =  fs.readFileSync(`${__dirname}/userAPI.json`, "utf-8");
  const objData = JSON.parse(data);

  if (req.url == "/") {
    res.end("Hello from the home page");
  } else if (req.url == "/about") {
    res.end("Hello from the About Us page");
  } else if (req.url == "/contact") {
    res.end("Hello from the contact page");
  } else if (req.url == "/userAPI") {
    res.writeHead(200,{"content-type":"application/json"})
    res.end(objData[2].name);
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>Error 404 page not found</h1>");
  }
});

// server listening on port
server.listen(8080, "127.0.0.1", () => {
  console.log(`listening on port http://localhost:8080`);
});
