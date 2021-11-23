const express = require("express");
const { addToFavorite, getFavorite, removeFavorite } = require("./controllers");
const router = express.Router();

router.post("/favorite", addToFavorite);
router.get("/favorite", getFavorite);
router.delete("/favorite", removeFavorite);

router.get("*", (req, res) => {
	res.status(404).send({ message: "notFoundErrorMessage" });
});

module.exports = router;
