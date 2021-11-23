const Favorite = require("./model/favorite-schema");

const addToFavorite = async (req, res) => {
	const { fullName, teamName } = req.body;
	try {
		const newFavorite = new Favorite({ fullName, teamName });
		await newFavorite.save();
		res.send("success");
	} catch (err) {
		console.log(err);
	}
};

const getFavorite = async (req, res) => {
	try {
		const favoriteCollection = await Favorite.find({});
		res.status(200).send(favoriteCollection);
	} catch (err) {
		console.log(err);
	}
};

const removeFavorite = async (req, res) => {
	const { fullName, teamName } = req.body;
	try {
		await Favorite.findOneAndDelete({ fullName: fullName, teamName: teamName });
		res.send("success");
	} catch (err) {
		console.log(err);
	}
};

module.exports = {
	addToFavorite,
	getFavorite,
	removeFavorite,
};
