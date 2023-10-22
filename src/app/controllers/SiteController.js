const Film = require("../models/Films.model");
const { multipleMongooseToObj } = require("../../ultis/mongoose");

class SiteController {
  // [GET] /
  index(req, res, next) {
    Film.find()
      .then((films) => {
        return res.render("home", {
          films: multipleMongooseToObj(films),
        });
      })
      .catch(next);
  }

  // [GET] /search
  search(req, res) {
    res.send("search");
  }
}

module.exports = new SiteController();
