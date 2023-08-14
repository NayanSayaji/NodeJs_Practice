// The http.createServer() method includes request
// and response parameters which is supplied by Node.Js

// The request object can be used to get information
// about the current HTTP request
// e.g., url, request header and data

// The response object can be used to send a response for a current http request

// If the response from the HTTP server is supposed  to be displayed as HTML,
// you should include and HTTP header with the correct content type :

const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req.url);

  // routing and http requests in Node.JS
  if (req.url == "/") {
    res.end("Hello from the home page");
  } else if (req.url == "/about") {
    res.end("Hello from the About Us page");
  } else if (req.url == "/contact") {
    res.end("Hello from the contact page");
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>Error 404 page not found</h1>");
  }
});

// server listening on port
server.listen(8080, "127.0.0.1", () => {
  console.log(`listening on port http://localhost:8080`);
});
