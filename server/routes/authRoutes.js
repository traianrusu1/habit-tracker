const passport = require("passport");

module.exports = (app) => {
  app.get(
    "/auth/google",
    (req, res, next) => {
      console.log("++++++++++++++++++++++++++++++++++++++++++");
      console.log("++++++++++++++++++++++++++++++++++++++++++");
      console.log("++++++++++++++++++++++++++++++++++++++++++");
      console.log("++++++++++++++++++++++++++++++++++++++++++");
      console.log(req.query);
      req.session = req.query;
      next();
    },
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  // app.get(
  //   "/auth/google/trainee",
  //   passport.authenticate("google", {
  //     scope: ["profile", "email"],
  //   })
  // );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/home");
    }
  );

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
