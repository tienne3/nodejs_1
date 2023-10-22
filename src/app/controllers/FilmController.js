const Film = require("../models/Films.model");
const { mongooseToObj } = require("../../ultis/mongoose");
const slug = require("mongoose-slug-generator");
const mongoose = require("mongoose");

mongoose.plugin(slug);

class FilmController {
  // [GET] /films/:slug
  show(req, res, next) {
    Film.findOne({ name: req.params.slug })
      .then((film) => {
        res.render("films/details", {
          details: mongooseToObj(film),
        });
      })
      .catch(next);
  }

  // [GET] /films/create
  create(req, res, next) {
    res.render("films/create");
  }

  // [POST] /films/create
  store(req, res, next) {
    const film = new Film(req.body);
    film
      .save()
      .then(() => res.redirect(`/films/${req.body.name}`))
      .catch(next);
  }

  // [PUT] /films/:id
  update(req, res, next) {
    Film.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/"))
      .catch(next);
  }

  // [DELETE] /films/:id
  delete(req, res, next) {
    Film.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("/"))
      .catch(next);
  }

  // [SOFT_DELETE] /films/:id
  softDelete(req, res, next) {
    Film.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("/"))
      .catch(next);
  }
}

module.exports = new FilmController();
