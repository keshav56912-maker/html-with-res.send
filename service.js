const express = require("express");
const path = require("path");

const app = express();
const PORT = 4000;

app.get("/api/products", (req, res) => {
  res.sendFile(path.join(__dirname, "view", "products.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
