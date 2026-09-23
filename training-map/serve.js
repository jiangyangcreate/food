#!/usr/bin/env node
// Local static file server for training-map.
// Usage: cd training-map && node serve.js
// Opens: http://127.0.0.1:8778/

const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 8778;
const HOST = "127.0.0.1";
const ROOT = __dirname;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js":   "application/javascript; charset=utf-8",
  ".mjs":  "application/javascript; charset=utf-8",
  ".css":  "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".wasm": "application/wasm",
  ".glb":  "model/gltf-binary",
  ".txt":  "text/plain; charset=utf-8",
  ".md":   "text/plain; charset=utf-8",
  ".png":  "image/png",
  ".svg":  "image/svg+xml",
};

const server = http.createServer((req, res) => {
  let urlPath = req.url.split("?")[0];
  if (urlPath === "/") urlPath = "/index.html";

  const filePath = path.join(ROOT, urlPath);
  const realPath = path.resolve(filePath);
  if (!realPath.startsWith(ROOT + path.sep) && realPath !== ROOT) {
    res.writeHead(403); res.end("Forbidden"); return;
  }

  fs.readFile(realPath, (err, data) => {
    if (err) {
      res.writeHead(err.code === "ENOENT" ? 404 : 500);
      res.end(err.code === "ENOENT" ? "Not Found" : "Server Error");
      return;
    }
    const ext = path.extname(realPath).toLowerCase();
    res.writeHead(200, {
      "Content-Type": MIME[ext] || "application/octet-stream",
      "Cache-Control": "no-cache",
    });
    res.end(data);
  });
});

server.listen(PORT, HOST, () => {
  console.log(`Training-map server running at http://${HOST}:${PORT}/`);
  console.log("Press Ctrl+C to stop.");
});
