const mongoose = require("mongoose");
const { Schema } = mongoose;

const habitSchema = new Schema({
  title: String,
  description: String,
  category: String,
  userId: String,
});

mongoose.model("habits", habitSchema);
