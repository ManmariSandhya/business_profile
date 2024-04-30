const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    comment: String
  });
  
//   const Review = mongoose.model('Review', reviewSchema);

  module.exports = mongoose.model('Review', reviewSchema);