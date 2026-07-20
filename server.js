const express = require("express");
const path = require("path");

const app = express();

// Serve everything in /public (index.html loads automatically at "/")
app.use(express.static(path.join(__dirname, "public")));

// Railway sets PORT for us; fall back to 3000 for local testing.
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Smiski tracker running on port ${port}`));
