module.exports = (app) => {
  require("./authRoutes")(app);
  require("./habitRoutes")(app);
};
