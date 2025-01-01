const express = require("express");
const router = express.Router();
const ayahControllers = require("../controllers/ayahControllers");

//Ayah routs
router.get("/", ayahControllers.getAyahs);
router.get("/number/:number", ayahControllers.getAyahByNumbers);
router.post("/", ayahControllers.CreateAyah);

module.exports = router;
