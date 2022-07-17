const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema(
    {
        title: {
            type: String,
            required: "Title is required"
        },
        genre: {
            type: String,
            required: "Genre is required"
        },
        plot: {
            type: String,
            required: "Plot is required"
        },
        mainCelebrity:  {
            type: Schema.Types.ObjectId,
            required: "Celebrity is required",
            ref: "Celebrity"
        }
    }
)

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie