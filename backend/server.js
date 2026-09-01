const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "STOX Backend is running 🚀",
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "STOX API is connected",
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`STOX Backend running on http://localhost:${PORT}`);
});