import http from "http";
import fs from "fs";
import { error } from "console";
const server = http.createServer((req, rep) => {
  const page = fs.readFileSync("./index.html");
  rep.writeHead(200, { "content-type": "text/html; charset=utf-8;" });
  rep.write(page);
  rep.end();
});

server.listen(2080, () => {
  if (error) {
    throw error;
  }
  console.log("server is running at 2080");
});
