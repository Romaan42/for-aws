import express from "express";
import { config } from "dotenv";
config();

const PORT = process.env.PORT || 5000;
const app = express();

app.get("/", (req, res) => {
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`running on http://localhost:${PORT}`);
});
