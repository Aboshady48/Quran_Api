const express = require("express");
const router = express.Router();

// Import routes
const AyahRoute = require("./ayah");
const SurahRoute = require("./surah");

// Handle routes
router.use("/api/ayah", AyahRoute);
router.use("/api/surah", SurahRoute);

module.exports = router;
