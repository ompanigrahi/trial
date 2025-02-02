const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000; // Use Railway's assigned port

app.use(cors());
app.use(express.json());

// Health Check Route
app.get("/health", (req, res) => {
  res.json({ status: "Railway is working fine!" });
});

// Main Route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Railway test server!" });
});

// Start Server and Listen on 0.0.0.0
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
