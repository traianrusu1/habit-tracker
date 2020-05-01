const mongoose = require("mongoose");
const { Schema } = mongoose;

const habitSchema = new Schema({
  title: { type: String, required: true },
  userId: { type: String, required: true },
  category: { type: String, required: true },
  scheduleType: { type: String, required: true },
  scheduleDays: [String],
  scheduleDaysPer: Number,
  duration: [String],
  description: String,
  colour: String,
});

mongoose.model("habits", habitSchema);
