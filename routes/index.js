const express = require("express");
const router = express.Router();

// Import routes
const AyahRoute = require("./ayah");
const SurahRoute = require("./surah");

// Handle routes
router.use("/api/ayah", AyahRoute);
router.use("/api/surah", SurahRoute);


router.get("/", (req, res) => {
  res.end("<h1>Hello From Main</h1>");
});
module.exports = router;
