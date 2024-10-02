const jsonServer = require("json-server");
const server = jsonServer.create();
const fs = require("fs");
const path = require("path");
const middlewares = jsonServer.defaults();

const dotenv = require("dotenv");
dotenv.config();

const data = JSON.parse(
  fs.readFileSync(path.join(__dirname, "db.json"), "utf-8")
);
const router = jsonServer.router(data);

server.use(middlewares);

server.use(
  // Add custom route here if needed
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);
server.use(router);
const port = process.env.API_PORT;
server.listen(port, () => {
  console.log("JSON Server is running");
});

module.exports = server;
