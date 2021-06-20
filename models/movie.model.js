const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    genre: {
      type: String,
      required: [true, 'Genre is required'],
    },
    plot: {
      type: String,
      required: [true, 'Plot is required'],
    },
    cast: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Celebrity',
    },
  },
  { timestamps: true },
);

const Movie = mongoose.model('Movie', schema);

module.exports = Movie;
