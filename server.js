const express = require("express");
const app = express();
const PORT = 3000;

app.get("/factory-status", (req, res) => {
  res.json({
    cronJobs: 3,
    raffeStatus: "online",
    lastDeploy: "2026-03-30T00:00:00.000Z",
    timestamp: new Date().toISOString(),
  });
});

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Factory Docs server running on port ${PORT}`);
});
