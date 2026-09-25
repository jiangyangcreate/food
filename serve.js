#!/usr/bin/env node
// Root static server — serves both diet (/) and training (/training-map/).
// Usage: node serve.js
// Opens: http://127.0.0.1:8788/

const http = require("http");
const fs   = require("fs");
const path = require("path");

const PORT = 8788;
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
  if (urlPath === "/" || urlPath === "") urlPath = "/index.html";
  if (urlPath.endsWith("/")) urlPath += "index.html";

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
  console.log(`Site server running at http://${HOST}:${PORT}/`);
  console.log("  Diet mode:     http://" + HOST + ":" + PORT + "/");
  console.log("  Training mode: http://" + HOST + ":" + PORT + "/training-map/");
  console.log("Press Ctrl+C to stop.");
});
