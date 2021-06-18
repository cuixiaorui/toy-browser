const http = require("http");
const server = http
  .createServer((req, res) => {
    res.end("ok");

    // const chunks = [];
    // req.on("data", (chunk) => {
    //   console.log("data")
    //   chunks.push(chunk.toString());
    // });

    // req.on("end", () => {
    //   console.log("end");
    //   console.log(chunks)
    //   res.end("ok");
    // });
  })
  .listen(8081);
