const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("a request has been made");
  res.setHeader("Content-Type", "text/html");

  let path = "./views/";

  // routes
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "/about.html";
      res.statusCode = 200;
      break;
    case "/aboutus":
      res.statusCode = 301; // Resource Moved Permanently
      res.setHeader("Location", "/about"); // redirecting
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      //   res.write(data);
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for requests");
});
