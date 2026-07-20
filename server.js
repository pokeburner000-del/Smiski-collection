const express = require("express");
const path = require("path");

const app = express();

// Serve any static files sitting next to this server (index.html, etc.)
app.use(express.static(__dirname));

// For the homepage — and any other path — send the tracker.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Railway provides PORT; fall back to 3000 for local testing.
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Smiski tracker running on port ${port}`));
