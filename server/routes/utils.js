module.exports = {
  checkLoggedIn: (req, res, next) => {
    console.log("checkLoggedIn");
    if (req.user) {
      console.log("in true");
      next();
    } else {
      console.log("in false");
      res.redirect("/");
    }
  },
};
