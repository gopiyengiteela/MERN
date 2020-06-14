import config from "./config";
import express from "express";
import apiRouter from "./api";

const server = express();
server.set("view engine", "ejs");
server.get("/", (req, res) => {
  res.render("indexn", { content: "Hello Express and EJS" });
});

server.use("/api", apiRouter);

server.use(express.static("public"));

server.listen(config.port, config.host, () => {
  console.info("Express listening on port", config.port);
});
