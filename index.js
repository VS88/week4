const http = require("http");

http
  .Server((req, res) => {

    console.log(req.url)
    if (req.url === "/result4/") {
      let CORS = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
        "Access-Control-Allow-Headers":
          "x-test,Content-Type,Accept,Access-Control-Allow-Headers",
      };

      const result = {
        message: "vyacheslavkirchuk",
        "x-result": req.headers["x-test"],
      };
      let body = "";

      req
        .on("data", (data) => (body += data))
        .on("end", () => {
          result["x-body"] = body;
          res.writeHead(200, {... CORS, "Content-Type": "application/json" });
          res.end(JSON.stringify(result));
        });
    }
  })
  .listen(4321, () => console.log("Server Ok"));
