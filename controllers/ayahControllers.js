const Ayah = require("../models/Ayah");
const Surah = require("../models/surah");

//create ayat
exports.CreateAyah = async (req, res) => {
  const { surah_number, verse_number, text, translation } = req.body;

  try {
    // Find the Surah by surah_number
    const surahDoc = await Surah.findOne({ id: surah_number });

    if (!surahDoc) {
      return res.status(404).json({
        success: false,
        message: `Surah with number ${surah_number} not found.`,
      });
    }

    // Check for duplicate Ayah within the Surah
    const foundedAyah = await Ayah.findOne({
      surah_number,
      verse_number,
    });

    if (foundedAyah) {
      return res.status(400).json({
        success: false,
        message: "Duplicate Ayah found in this Surah.",
      });
    }

    // Create a new Ayah
    const newAyah = await Ayah.create({
      surah_number,
      verse_number,
      text,
      translation,
    });

    return res.status(201).json({
      success: true,
      message: "Ayah created successfully.",
      data: newAyah,
    });
  } catch (error) {
    console.error("Error creating Ayah:", error);
    return res.status(500).json({
      success: false,
      message: "Error creating Ayahs.",
      error: error.message,
    });
  }
};

exports.getAyahs = async (req, res) => {
  try {
    const getAllAyaht = await Ayah.find();

    res.status(200).json({
      success: true,
      message: "Retrieving Ayaht successfully",
      data: getAllAyaht,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retrieving Ayahs",
      error: error.message,
    });
  }
};

// Get a Ayah by Surah number and Verse number
exports.getAyahByNumbers = async (req, res) => {
  try {
    const { surah_number, verse_number } = req.params;

    // Validate if numbers are numeric
    if (isNaN(surah_number) || isNaN(verse_number)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Surah or Verse number format",
      });
    }

    const AyahByNumbers = await Ayah.findOne({
      surah_number: parseInt(surah_number),
      verse_number: parseInt(verse_number),
    });

    if (!AyahByNumbers) {
      return res.status(404).json({
        success: false,
        message: "Ayah not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Ayah retrieved by numbers successfully",
      data: AyahByNumbers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retrieving Ayah by numbers",
      error: error.message,
    });
  }
};
