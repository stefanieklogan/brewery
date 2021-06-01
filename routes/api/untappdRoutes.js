const router = require("express").Router();

const untappdController = require("../../controllers/untappdController");

router.route("/")
	.get(untappdController.searchBeers)

	router.route("/checkins")
	.get(untappdController.getCheckins)
module.exports = router;
