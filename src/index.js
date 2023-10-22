const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine, create } = require("express-handlebars");
const app = express();
const port = 3000;
const router = require("./routes");

const db = require("./config/db");

// Connect to DB
db.connectDB();

app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("combined"));
const hbs = create({
  extname: ".hbs",
  // Specify helpers which are only registered on this instance.
  helpers: {
    sum: (a, b) => a + b,
  },
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// router list
router(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
