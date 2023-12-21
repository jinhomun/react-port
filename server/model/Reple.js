const mongoose = require("mongoose");

const repleSchema = new mongoose.Schema(
    {
        reple: String,

    },
    { collection: "reples" }
);

const Reple = mongoose.model("Reple", repleSchema);

module.exports = { Reple };