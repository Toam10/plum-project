const mongoose = require("mongoose");
const { Schema } = mongoose;

const favoriteSchema = new Schema({
	fullName: { type: String, required: true },
	teamName: { type: String, required: true },
});

const Favorite = mongoose.model("favorite", favoriteSchema);

module.exports = Favorite;
