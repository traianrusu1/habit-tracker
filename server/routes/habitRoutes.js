const passport = require("passport");
const mongoose = require("mongoose");

const checkLoggedIn = require("./utils").checkLoggedIn;

const Habit = mongoose.model("habits");

module.exports = (app) => {
  app.get("/api/habits", checkLoggedIn, async (req, res) => {
    console.log("-- GET /api/habits --");
    console.log(req.user);
    const habits = await Habit.findOne({
      userId: req.user.id,
    });
    console.log(habits);
    res.send("SUCCESS");
  });

  app.post("/api/habits", checkLoggedIn, async (req, res) => {
    console.log("-- POST /api/habits --");
    console.log(req.body);
    const newHabit = await new Habit(req.body).save();

    res.send(newHabit);
  });
};
