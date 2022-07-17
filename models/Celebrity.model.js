const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebritySchema = new Schema(
    {
        name: {
            type: String,
            required: "Name is required"
        },
        occupation: {
            type: String,
            required: "Occupation is required"
        },
        catchPhrase: String
    }
)

const Celebrity = mongoose.model("Celebrity", celebritySchema);

module.exports = Celebrity;