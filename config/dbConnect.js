const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://mohamedaboshadydev:QwEg7G0VjZ9AIU6d@quran-api.mv3kn.mongodb.net/?retryWrites=true&w=majority&appName=quran-api"
    );
    console.log("Database Connected Sucssfully");
  } catch (error) {
    console.log(`Database Has Error on : ${error}`);
  }
};
module.exports = dbConnect;
