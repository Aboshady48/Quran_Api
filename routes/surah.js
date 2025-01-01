const express = require("express");
const router = express.Router();
const surahControllers = require("../controllers/surahControllers");

//surah routes
router.get("/", surahControllers.getAllSurah);
router.get("/:id", surahControllers.getAllSurahById);
router.get("/number/:number", surahControllers.getAllSurahByNumber);
router.post("/", surahControllers.CreateSurah);

module.exports = router;
