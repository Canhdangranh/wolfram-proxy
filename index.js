const express = require("express");
const fetch = require("node-fetch");
const app = express();

const APPID = "4A73HU-KATRJQ3VHK"; // AppID Wolfram của thầy

app.get("/plot", async (req, res) => {
  const input = req.query.input;
  if (!input) return res.status(400).json({ error: "Thiếu input" });

  const url = `https://api.wolframalpha.com/v1/simple?appid=${APPID}&input=${encodeURIComponent(input)}`;
  res.json({ imageUrl: url });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("🚀 Proxy chạy tại cổng " + PORT));
