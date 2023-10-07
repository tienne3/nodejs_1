class NewController {
  // [GET] /news
  index(req, res) {
    res.send("news");
  }

  // [GET] /news/:slug
  details(req, res) {
    res.send("details");
  }
}

module.exports = new NewController();
