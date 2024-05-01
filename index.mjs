import { createReadStream } from "node:fs";
import { createServer } from "node:http";

createServer(function (request, response) {
  createReadStream("./blocklist.txt").pipe(response);
}).listen(process.env.PORT);
