const express = require("express");
const router = express.Router();

const filmsController = require("../app/controllers/FilmController");

router.get("/create", filmsController.create);
router.post("/store", filmsController.store);
router.get("/:slug", filmsController.show);

module.exports = router;
