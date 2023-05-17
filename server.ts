import http from "http";
import fs from "fs";

const server: http.Server = http.createServer((req, rep) => {
  if (req.method === "GET") {
    const page = fs.readFileSync("./index.html");
    rep.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
    rep.write(page);
    rep.end();
  }
});

server.listen(2080, (error: Error) => {
  if (error) {
    throw error;
  }
  console.log("server is runnig");
});
