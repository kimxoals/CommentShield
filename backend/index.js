const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🛡️ CommentShield backend is running!");
});

app.post("/analyze", (req, res) => {
  const comments = req.body.comments || [];

  const flagged = comments.filter((comment) =>
    comment.toLowerCase().includes("invest now")
  );

  res.json({ flagged });
});

app.listen(PORT, () => {
  console.log(`✅ Backend listening on http://localhost:${PORT}`);
});
