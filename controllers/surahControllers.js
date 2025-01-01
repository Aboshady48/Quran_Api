const Surah = require('../models/surah')

exports.CreateSurah = async (req, res) => {
  const {number,name,englishName,englishNameTranslation,numberOfAyahs,revelationType,} = req.body;
  try {
    // Check if all required fields are provided
    if (!number ||!name ||!englishName ||!englishNameTranslation ||!numberOfAyahs ||!revelationType) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    // Check if the Surah already exists
    const foundSurah = await Surah.findOne({ name }).exec();
    if (foundSurah) {
      return res.status(409).json({
        success: false,
        message: "The Surah already exists.",
      });
    }

    // Create the Surah
    const createSurah = await Surah.create(req.body);

    res.status(201).json({
      success: true,
      message: "Surah has been created successfully.",
      data: createSurah,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating Surah.",
      error: error.message,
    });
  }
};

//get all surahs
exports.getAllSurah = async (req, res) => {
  try {
    const getSurahs = await Surah.find();
    res.status(200).json({
      success: true,
      message: "Retrieving Surahs sucssfully",
      data: getSurahs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retrieving Surahs",
      error: error.message,
    });
  }
};

// Get a single Surah by ID
exports.getAllSurahById = async (req, res) => {
  try {
    const surahById = await Surah.findById(req.params.id);
    if (!surahById) {
      return res.status(404).json({
        success: false,
        message: "Surah by id not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Surah retrieving by Id sucssfully",
      data: surahById,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error at Surah retrieving by id ",
      error: error.message,
    });
  }
};

// Get a single Surah by number of the surah
exports.getAllSurahByNumber = async (req, res) => {
  try {
    const { number } = req.params;

    // Validate if number is numeric
    if (isNaN(number)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Surah number format",
      });
    }

    const surahByNumber = await Surah.findOne({ number: parseInt(number) });

    if (!surahByNumber) {
      return res.status(404).json({
        success: false,
        message: "Surah by number not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Surah retrieved by number successfully",
      data: surahByNumber,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retrieving Surah by number",
      error: error.message,
    });
  }
};
