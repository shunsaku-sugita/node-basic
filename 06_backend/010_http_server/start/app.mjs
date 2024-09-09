import * as http from "http";

// http://localhost:8080/hello -> hellow
// http://localhost:8080/bye -> bye

const server = http.createServer(function (req, res) {
  console.log(req.url);
  if (req.url === "/hello") {
    res.end("<script>console.log('frontend')</script>");
  } else if (req.url === "/bye") {
    res.end("bye");
  }
});

server.listen(8080);