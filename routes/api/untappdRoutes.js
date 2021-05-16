const router = require("express").Router();

const untappdController = require("../../controllers/untappdController");

router.route("/")
	.get(untappdController.searchBeers)

module.exports = router;
