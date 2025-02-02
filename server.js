const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Health Check Route
app.get("/health", (req, res) => {
  res.json({ status: "Railway is working fine!" });
});

// Catch-all route to test server response
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Railway test server!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
