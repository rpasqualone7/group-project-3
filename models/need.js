const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const needSchema = new Schema({
  name: { type: String, required: true },
  state: { type: String, required: true },
  email: { type: String, required: true },
  bio: String,
  date: { type: Date, default: Date.now }
});

const Need = mongoose.model("Need", needSchema);

module.exports = Need;
