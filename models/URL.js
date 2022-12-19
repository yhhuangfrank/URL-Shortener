//- setting URL data schema
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const { Schema } = mongoose;
const URLSchema = new Schema({
  shorterURL: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 5,
    validate: {
      validator(value) {
        return /[a-z0-9]{5}/.test(value);
      },
      message: (input) => `your shortenURL: ${input.value} is not valid !`,
    },
  },
  originalURL: {
    type: String,
    required: true,
    validate: {
      validator(value) {
        return /http\:\/\/|https\:\/\//.test(value);
      },
      message: (input) => `your originalURL: ${input.value} is not valid !`,
    },
  },
});

//- export model
module.exports = mongoose.model("URL", URLSchema);
