module.exports = {
  multipleMongooseToObj: (mongooseArr) => {
    return mongooseArr.map((mongoose) => mongoose.toObject());
  },
  mongooseToObj: (mongoose) => {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
