const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    occupation: {
      type: String,
      default: 'unknown'
    },
    catchPhrase: {
      type: String,
      required: [true, 'CatchPhrase is required'],
    }
  },
  { timestamps: true },
);

const Celebrity = mongoose.model('Celebrity', schema);

module.exports = Celebrity;
