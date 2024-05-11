import express from "express";
import http from "node:http";
import createBareServer from "@tomphttp/bare-server-node";
import path from "node:path";
import * as dotenv from "dotenv";
dotenv.config();

const __dirname = process.cwd();
const server = http.createServer();
const app = express(server);
const bareServer = createBareServer("/bare/");
const PORT = process.env.PORT || 8080

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "index.html"));
});
app.get("/math", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "games.html"));
});
app.get("/english", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "apps.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "about.html"));
});
app.get("/settings", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "settings.html"));
});
app.get("/portal", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "loader.html"));
});
app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "agloader.html"));
});
app.get("/snorlax", (req, res) => {
  res.sendFile(path.join(__dirname, "static/people-secrets/", "snorlax.html"));
});
app.get("/tlochsta", (req, res) => {
  res.sendFile(path.join(__dirname, "static/people-secrets/", "tlochsta.html"));
});
app.get("/fowntain", (req, res) => {
  res.sendFile(path.join(__dirname, "static/people-secrets/", "fowntain.html"));
});
app.get("/bigfoot", (req, res) => {
  res.sendFile(path.join(__dirname, "static/people-secrets/", "bigfoot.html"));
});
app.get("/burb", (req, res) => {
  res.sendFile(path.join(__dirname, "static/people-secrets/", "burb.html"));
});
app.get("/derpman", (req, res) => {
  res.sendFile(path.join(__dirname, "static/people-secrets/", "derpman.html"));
});
app.get("/cats", (req, res) => {
  res.sendFile(path.join(__dirname, "static/people-secrets/", "cats.html"));
});
app.use((req, res) => {
  res.statusCode = 404;
  res.sendFile(path.join(__dirname, './static/404.html'))
});

server.on("request", (req, res) => {
  if (bareServer.shouldRoute(req)) {
    bareServer.routeRequest(req, res);
  } else {
    app(req, res);
  }
});

server.on("upgrade", (req, socket, head) => {
  if (bareServer.shouldRoute(req)) {
    bareServer.routeUpgrade(req, socket, head);
  } else {
    socket.end();
  }
});

server.on("listening", () => {
  console.log(`Snorlax's Cave listening on port ${process.env.PORT}`);
});

server.listen({
  port: PORT,
});
