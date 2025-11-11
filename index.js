const express = require("express");
const path = require("path");

const app = express();

// Nói cho server biết thư mục chứa file tĩnh (HTML, CSS, JS, ảnh,…)
app.use(express.static(path.join(__dirname, "public")));

// Route mặc định: mở index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Chạy server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server đang chạy tại http://localhost:${PORT}`));
