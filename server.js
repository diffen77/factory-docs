const express = require("express");
const app = express();
const PORT = 3000;

// Caddy proxies /factory* → this server, so all routes must be under /factory
app.get("/factory/factory-status", (req, res) => {
  res.json({
    cronJobs: 7,
    raffeStatus: "online",
    lastDeploy: new Date().toISOString(),
    timestamp: new Date().toISOString(),
  });
});

// Also support /factory-status for direct container access
app.get("/factory-status", (req, res) => {
  res.json({
    cronJobs: 7,
    raffeStatus: "online",
    lastDeploy: new Date().toISOString(),
    timestamp: new Date().toISOString(),
  });
});

// Serve static HTML under /factory path (Caddy sends /factory/v3-plan/...)
app.use("/factory", express.static("public"));
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Factory Docs server running on port ${PORT}`);
});
