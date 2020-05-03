const passport = require("passport");
const mongoose = require("mongoose");
var ObjectId = mongoose.Types.ObjectId;

const checkLoggedIn = require("./utils").checkLoggedIn;

const Habit = mongoose.model("habits");

module.exports = (app) => {
  app.get("/api/habits", checkLoggedIn, async (req, res, next) => {
    console.log("-- GET /api/habits --");
    console.log(req.user);
    try {
      const habits = await Habit.find({
        userId: req.user.id,
      });
      res.send(habits);
    } catch (err) {
      next(err);
    }
  });

  app.post("/api/habits", checkLoggedIn, async (req, res, next) => {
    console.log("-- POST /api/habits --");
    console.log(req.body);
    try {
      const newHabit = await new Habit(req.body).save();
      res.send(newHabit);
    } catch (err) {
      next(err);
    }
  });

  app.delete("/api/habits/:habitId", checkLoggedIn, async (req, res, next) => {
    console.log("-- DELETE /api/habits --");
    console.log(req.params.habitId);

    try {
      const deleteHabit = await Habit.findByIdAndDelete(
        ObjectId(req.params.habitId)
      );
      res.send(deleteHabit);
    } catch (err) {
      next(err);
    }
  });
};
