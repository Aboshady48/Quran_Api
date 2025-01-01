const mongoose = require("mongoose");

const surahSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  englishName: {
    type: String,
    required: true,
    trim: true,
  },
  englishNameTranslation: {
    type: String,
    required: true,
    trim: true,
    maxlength: 200,
  },
  numberOfAyahs: {
    type: Number,
    required: true,
    min: 3,
    max: 286,
  },
  revelationType: {
    type: String,
    required: true,
    trim: true,
    enum: {
      values: ["Meccan", "Medinan"],
      message: "Revelation type must be either 'Meccan' or 'Medinan'.",
    },
  },
  ayahs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ayah",
    },
  ],
});

const Surah = mongoose.model("Surah", surahSchema);
module.exports = Surah;
