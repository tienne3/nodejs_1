const newsRouter = require("./news.route");
const siteRouter = require("./site.route");
const filmsRouter = require("./films.route");
function route(app) {
  app.use("/news", newsRouter);
  app.get("/search", siteRouter);
  app.use("/films", filmsRouter);

  app.get("/", siteRouter);
}

module.exports = route;
