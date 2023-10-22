const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const slug = require("mongoose-slug-generator");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const Schema = mongoose.Schema;

const Film = new Schema(
  {
    _id: { type: Number },
    name: { type: String, maxLength: 255, require },
    description: { type: String, maxLength: 600 },
    image: { type: String },
    slug: {
      type: String,
      slug: "name",
      unique: true,
    },
  },
  {
    _id: false,
    timestamps: true,
  },
);
mongoose.plugin(slug);
Film.plugin(AutoIncrement);
Film.plugin(mongooseDelete, { overrideMethods: "all", deletedAt: true });

module.exports = mongoose.model("Film", Film);
