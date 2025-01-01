const mongoose = require("mongoose");

const ayahSchema = new mongoose.Schema(
  {
    surah_number: {
      type: Number,
      required: true,
      trim: true,
    },
    verse_number: {
      type: Number,
      required: true,
      trim: true,
    },
    text: {
      type: String,
      required: true,
      trim: true,
    },
    translation: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const Ayah = mongoose.model("Ayah", ayahSchema);
module.exports = Ayah;
